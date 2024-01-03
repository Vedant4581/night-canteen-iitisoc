import React from 'react'
// import { FaFacebook,FaInstagram,FaTwitter } from 'react-icons/fa6';
export default function Footer() {
  return (
    <div className='container'>
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div className="col mb-3">
      <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
        NIGHT CANTEEN IITI
      </a>
      <p className="text-body-secondary">© 2023</p>
    </div>

    <div className="col mb-3">

    </div>

    <div className="col mb-3">
      <h5>Go to</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Menu</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Services</a></li>
      </ul>
    </div>

    <div className="col mb-3">
      <h5>Contact us</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><p className="nav-link p-0 text-body-secondary">+91 xxxxxxxxxx</p></li>
        <li className="nav-item mb-2"><p className="nav-link p-0 text-body-secondary">+91 xxxxxxxxxx</p></li>
        <li className="nav-item mb-2"><p className="nav-link p-0 text-body-secondary">+91 xxxxxxxxxx</p></li>
        <li className="nav-item mb-2"><p className="nav-link p-0 text-body-secondary">+91 xxxxxxxxxx</p></li>
        <li className="nav-item mb-2"><p className="nav-link p-0 text-body-secondary">+91 xxxxxxxxxx</p></li>
      </ul>
    </div>

    <div className="col mb-3">
      <h5>Follow us</h5>
      <ul className="nav flex-column">
        {/* <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary"><FaFacebook/></a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary"><FaInstagram/></a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary"><FaTwitter/></a></li> */}
      </ul>
    </div>
  </footer>
    </div>
  )
}
