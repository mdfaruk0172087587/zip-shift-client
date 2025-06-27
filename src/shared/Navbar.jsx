import React from 'react';
import { Link, NavLink } from 'react-router';
import LogoProFast from './LogoProFast';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const Links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/coverage'>Coverage</NavLink></li>
    <li><NavLink to='/addParcel'>Add Parcel</NavLink></li>
    <li><NavLink to='/about'>About As</NavLink></li>
  </>
  // handle log out
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        // log out 
        logOut()
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
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
    });
  }
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

            {Links}
          </ul>
        </div>
        <a className=" text-xl ml-4"><LogoProFast></LogoProFast></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {Links}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? <>
            <Link onClick={handleLogOut} className='btn'>Log Out</Link>
          </>
            :
            <>
              <Link className='btn mr-2' to='/login'>Log In</Link>
              <Link className='btn' to='/register'>Register</Link>
            </>
        }
      </div>
    </div>
  );
};

export default Navbar;