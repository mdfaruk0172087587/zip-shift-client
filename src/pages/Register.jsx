import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import GoogleLogin from '../socalLogin/GoogleLogin';
import { Link } from 'react-router';

const Register = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {registerUser} = useAuth();
    const onSubmit = (data) =>{
      //  register user
      registerUser(data.email, data.password)
      .then(result => {
        console.log(result.user)
      })
      .catch(error => {
        console.log(error)
      })
    }
    return (
      
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
              <h1 className="text-5xl font-bold">Create an account</h1>
       <form onSubmit={handleSubmit(onSubmit)}>
         <fieldset className="fieldset">

          <label className="label">Email</label>
          <input type="email" {...register('email', {required : true})} className="input" placeholder="Email" />
          {
            errors.email?.type === 'required' && <p className='text-red-500'>
                email hab ben required
            </p>
          }

          <label className="label">Password</label>
          <input type="password" {...register('password', {required : true, minLength : 6})} className="input" placeholder="Password" />
          {
            errors.password?.type === 'required' && <p className='text-red-500'>
                password has ben required
            </p>
          }
          {
            errors.password?.type === 'minLength' && <p className='text-red-500'>
                password has ben 6 minLength
            </p>
          }
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p>alrady acount ? <Link className="btn btn-link" to='/login'>Login</Link></p>
       </form>
       <GoogleLogin></GoogleLogin>
  </div>
</div>
    );
};

export default Register;