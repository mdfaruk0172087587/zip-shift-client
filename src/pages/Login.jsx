import React from 'react';
import { useForm } from 'react-hook-form';
import GoogleLogin from '../socalLogin/GoogleLogin';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const { signIn } = useAuth();

    const onSubmit = (data) => {
        // sing i n
        signIn(data.email, data.password)
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location.state || '/')
            })
            .catch(error => {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: error.message,
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" {...register('email')} className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" {...register('password', { required: true, minLength: 6 })} className="input" placeholder="Password" />
                    {
                        errors.password?.type === 'required' && <p className='text-red-600'>
                            password wel be required
                        </p>
                    }
                    {
                        errors.password?.type === 'minLength' && <p className='text-red-600'>
                            password has ben 6 carectar
                        </p>
                    }
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
                <p>you hav a new ? <Link to='/register' className="btn btn-link">Register</Link></p>
            </form>
            <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default Login;