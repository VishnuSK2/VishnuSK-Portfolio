import React from 'react'
import { CiMail } from 'react-icons/ci'
import { FaPhone } from 'react-icons/fa'
function Contact() {
  return (
    <div className='contact' id='contact'>
      <div className="container text-light text-center p-5">
        <h1>Contact</h1>
        <p style={{color:"rgb(0, 255, 127)"}}>Ready to get started on your project?<br /> Contact me now for a Free Consultation.</p>
        <div className='d-flex justify-content-center'>
          <button className='btn text-dark fw-bold p-3 rounded-4' style={{background:"rgb(0, 255, 127)"}}><CiMail className='fs-2' /> skvishnum1998@gmail.com</button>
          <button className='btn text-dark fw-bold p-3 rounded-4' style={{background:"rgb(0, 255, 127)"}}><FaPhone className='fs-3' /> 7356139191</button>
        </div>
        <div className='mt-4' style={{margin:'auto'}}>
        <h4>Get in touch using the form</h4>
        <input type="text"  placeholder='Email' />
        <textarea  placeholder='Send a message to get started' rows={10}></textarea>
        </div>
        <button className='btn mt-3 px-5 rounded-5 fw-bold text-dark' style={{background:"rgb(0, 255, 127)"}}>SUBMIT</button>
      </div>
    </div>
  )
}

export default Contact
