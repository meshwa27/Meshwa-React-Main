import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaHome,FaPhoneAlt,FaEnvelope,FaPrint} from "react-icons/fa";

function Footer() {
  return (
    <div style={{background:'#1b2430', marginTop:'50px'}}>
    <div className='container'>
      <div className='row py-5 text-white'>
      <div className='col-md-3 col-sm-12'>
        <h4 style={{color:'#17cf97'}}>Comapany Name</h4>
        <p>In This Section we should write about our company to introduce your company or something else </p>
      </div>
      <div className='col-md-3 col-sm-12'>
        <h4 style={{color:' #17cf97'}}>Services</h4>
        <p>About</p>
        <p>Return Police</p>
        <p>Customer serv</p>
        <p>Customer serv</p>
      </div>
      <div className='col-md-3 col-sm-12'>
        <h4 style={{color: '#17cf97'}}>Useful Links</h4>
        <p>sitmap</p>
        <p>Shipping rates</p>
        <p>Affililat progrm</p>
      </div>
      <div className='col-md-3 col-sm-12'>
        <h4 style={{color:' #17cf97'}}>Address</h4>
        <FaHome className="me-2"/>meshwa... <br/>
        <FaPhoneAlt className="me-2" />00005205600664 <br/>
        <FaEnvelope className="me-2"/>example@gmail.com <br/>
        <FaPrint className="me-2"/>+9156248156 <br/>
      </div>
      </div>
      <p className='text-white pb-5'>@copyright code with yoursaf 2024</p>
    </div>
    </div>
  )
}

export default Footer
//hgh