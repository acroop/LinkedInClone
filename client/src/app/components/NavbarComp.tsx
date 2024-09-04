import Image from 'next/image'
import React from 'react'

function NavbarComp() {
    return (
        <div className="navbar bg-base-100 ">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">
                    <Image 
                    src="/LOGO.png"
                    width={75}
                    height={2}
                    alt='logo'
                    />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Jobs</a></li>
                    <li><a>Internship</a></li>
                    <li>
                        <details>
                            <summary>Support</summary>
                            <ul className="p-2">
                                <li><a>Resume Builder</a></li>
                                <li><a>Counselling</a></li>
                                <li><a>PYQs</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Message</a></li>
                </ul>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="/pp.jpg" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavbarComp
