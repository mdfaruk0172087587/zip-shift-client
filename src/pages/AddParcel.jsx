import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const generateTrackingId = () => {
  const isoString = new Date().toISOString(); 
  const sanitized = isoString.replace(/[-:.TZ]/g, ""); 
  return `TRK-${sanitized}`; 
};

const AddParcel = () => {
    const serviceData = useLoaderData();
    // eslint-disable-next-line no-unused-vars
    const [cost, setCost] = useState(null);
    const { register, handleSubmit, watch, reset } = useForm();
    const { user } = useAuth();
    const axiosInstance = useAxios();

    const type = watch("type");
    const senderRegion = watch("senderRegion");
    const receiverRegion = watch("receiverRegion");

    const getServiceCentersByRegion = (region) => {
        const districts = serviceData.filter((item) => item.region === region);
        const centers = new Set();
        districts.forEach((district) => {
            district.covered_area.forEach((area) => centers.add(area));
        });
        return Array.from(centers);
    };

    const calculateCost = (type, weight, isOutside) => {
        weight = parseFloat(weight || 0);

        if (type === "document") {
            return isOutside ? 80 : 60;
        }

        if (type === "non-document") {
            if (weight <= 3) {
                return isOutside ? 150 : 110;
            } else {
                const base = isOutside ? 150 : 110;
                const extraKg = weight - 3;
                const extraCost = extraKg * 40 + (isOutside ? 40 : 0);
                return base + extraCost;
            }
        }

        return 0;
    };

    const onSubmit = (data) => {
        const isOutsideCity = data.senderRegion !== data.receiverRegion;
        const deliveryCost = calculateCost(data.type, data.weight, isOutsideCity);
        setCost(deliveryCost);

        Swal.fire({
            title: "Confirm Delivery",
            html: `<b>Estimated Delivery Cost: ৳${deliveryCost}</b><br>Do you want to confirm this parcel?`,
            icon: "info",
            showCancelButton: true,
            confirmButtonText: "Confirm",
        }).then((result) => {
            if (result.isConfirmed) {
                confirmSubmission({
                    ...data,
                    cost: deliveryCost,

                });
            }
        });
    };

    const confirmSubmission = async (formData) => {
        const payload = {
            ...formData,
            created_by: user?.email,
            payment_status: 'unpaid',
            delivery_date: 'not_collected',
            trackingId: generateTrackingId(),
            creation_date: new Date().toISOString(),
        };

        console.log("Saving to database:", payload);

        axiosInstance.post('/parcels', payload)
        .then(res => {
            console.log(res.data)
            if(res.data.insertedId){
                alert('data add successfully')
            }
        })
        .catch(error => {
           alert(error.message)
        })
        
        // Swal.fire("Success!", "Parcel saved successfully!", "success");
        reset();
    };

    const uniqueRegions = [...new Set(serviceData.map((s) => s.region))];

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 px-4 py-6 max-w-6xl mx-auto">
            {/* Heading */}
            <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold">Create Parcel</h2>
                <p className="text-sm text-gray-500">As this is door-to-door delivery, please fill both pickup & delivery details</p>
            </div>

            {/* Parcel Info */}
            <div className="grid gap-4 md:grid-cols-3 p-4 border rounded-lg shadow bg-base-100">
                <h3 className="md:col-span-3 font-semibold text-lg mb-2">Parcel Info</h3>

                <div>
                    <label className="label">Parcel Type</label>
                    <select {...register("type", { required: true })} className="select select-bordered w-full">
                        <option value="">Select Type</option>
                        <option value="document">Document</option>
                        <option value="non-document">Non-Document</option>
                    </select>
                </div>

                <div>
                    <label className="label">Parcel Title</label>
                    <input {...register("title", { required: true })} type="text" placeholder="Parcel Title" className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="label">Parcel Weight (KG)</label>
                    <input
                        {...register("weight", {
                            validate: (value) => type === "non-document" ? !!value : true
                        })}
                        type="number"
                        step="0.1"
                        placeholder="Parcel Weight (kg)"
                        className="input input-bordered w-full"
                    />
                </div>
            </div>

            {/* Sender Info */}
            <div className="space-y-4 p-4 border rounded-lg shadow bg-base-100">
                <h3 className="font-semibold text-lg mb-2">Sender Info</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                        <label className="label">Sender Name</label>
                        <input {...register("senderName", { required: true })} type="text" placeholder="Sender Name" className="input input-bordered w-full" />
                    </div>
                    <div>
                        <label className="label">Sender Contact</label>
                        <input {...register("senderContact", { required: true })} type="text" placeholder="Contact Number" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                        <label className="label">Sender Region</label>
                        <select {...register("senderRegion", { required: true })} className="select select-bordered w-full">
                            <option value="">Select Region</option>
                            {uniqueRegions.map(region => (
                                <option key={region} value={region}>{region}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="label">Sender Service Center</label>
                        <select
                            {...register("senderServiceCenter", { required: true })}
                            className="select select-bordered w-full"
                            disabled={!senderRegion}
                        >
                            <option value="">Select Service Center</option>
                            {getServiceCentersByRegion(senderRegion).map(center => (
                                <option key={center} value={center}>{center}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div>
                    <label className="label">Sender Address</label>
                    <input {...register("senderAddress", { required: true })} type="text" placeholder="Address" className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="label">Pickup Instruction</label>
                    <textarea {...register("pickupInstruction", { required: true })} placeholder="Pickup Instruction" className="textarea textarea-bordered w-full" />
                </div>
            </div>

            {/* Receiver Info */}
            <div className="space-y-4 p-4 border rounded-lg shadow bg-base-100">
                <h3 className="font-semibold text-lg mb-2">Receiver Info</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                        <label className="label">Receiver Name</label>
                        <input {...register("receiverName", { required: true })} type="text" placeholder="Receiver Name" className="input input-bordered w-full" />
                    </div>
                    <div>
                        <label className="label">Receiver Contact</label>
                        <input {...register("receiverContact", { required: true })} type="text" placeholder="Contact Number" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                        <label className="label">Receiver Region</label>
                        <select {...register("receiverRegion", { required: true })} className="select select-bordered w-full">
                            <option value="">Select Region</option>
                            {uniqueRegions.map(region => (
                                <option key={region} value={region}>{region}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="label">Receiver Service Center</label>
                        <select
                            {...register("receiverServiceCenter", { required: true })}
                            className="select select-bordered w-full"
                            disabled={!receiverRegion}
                        >
                            <option value="">Select Service Center</option>
                            {getServiceCentersByRegion(receiverRegion).map(center => (
                                <option key={center} value={center}>{center}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div>
                    <label className="label">Receiver Address</label>
                    <input {...register("receiverAddress", { required: true })} type="text" placeholder="Address" className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="label">Delivery Instruction</label>
                    <textarea {...register("deliveryInstruction", { required: true })} placeholder="Delivery Instruction" className="textarea textarea-bordered w-full" />
                </div>
            </div>

            <div className="text-center">
                <button className="btn btn-primary w-full md:w-auto">Submit</button>
            </div>
        </form>
    );
};

export default AddParcel;
