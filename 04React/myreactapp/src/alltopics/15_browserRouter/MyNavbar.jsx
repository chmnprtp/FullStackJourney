import React from 'react'
import {Link} from "react-router-dom"

const MyNavbar = () => {
  return (
    <nav className="bg-blue-400 flex justify-between px-4 py-5 items-center text-white">
        <div className="font-semibold text-2xl">Browser-Router</div>
        <section className="flex list-none gap-5">
            {/* <li><a href="/">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Contact">Contact</a></li>
            <li><a href="/Signup">Signup</a></li> */}

            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Signup">Signup</Link></li>
        </section>
    </nav>
  )
}

export default MyNavbar