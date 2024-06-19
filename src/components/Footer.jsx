import React from 'react'
import { FaTelegram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className="footer site-container border card-bordered p-10 bg-neutral text-neutral-content">
    <aside>
          <Link className="btn btn-secondary font-bold text-2xl" to="/">
            MyStore
          </Link>
      <p>BekhruzGroup<br/>Providing reliable tech since 2023</p>
    </aside> 
    <nav>
      <h6 className="footer-title">Social</h6> 
      <div className="grid grid-flow-col gap-4">
        <a href='https://t.me/bekhruzbeks'>
          <FaTelegram className="fill-current w-8 h-8"/>
        </a>
        <a href='#'>
          <IoLogoYoutube className="fill-current w-8 h-8"/>
        </a>
        <a href='https://www.linkedin.com/in/bexruzbek-odashev-ab752328a/'>
          <FaLinkedin className="fill-current w-8 h-8"/>
        </a>
        <a href="https://www.instagram.com/darling._67/">
            <FaInstagram className="fill-current w-8 h-8"/>
        </a>
      </div>
    </nav>
  </footer></div>
  )
}

export default Footer