import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaReact, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      <footer className='p-4' style={{ backgroundColor: "black" }}>
        <div className="container d-flex justify-content-between text-light mt-2">
          <p className='mt-2'>This website was made with <FaReact className='fs-2 ms-1 rotate' style={{ color: "RGB(97, 218, 251)" }} /></p>
          <div className='fs-3'>
          <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3B7M70A2AsS4SECeGFJEGxEA%3D%3D" target='_blank'><FaLinkedin style={{color:'rgb(10, 102, 194)'}} className='me-3' /></a>
          <a href="https://github.com/VishnuSK2" target='_blank'><FaGithub className='me-3' style={{color:"white"}} /></a>
          <a href="https://wa.me/<917356139191>" target='_blank'><FaWhatsapp style={{color:'rgb(37, 211, 102)'}} className='me-3'/></a>
          <a href="https://www.instagram.com/____s_k.___?igsh=YXQ3NHRhczVpYW91" target='_blank'><FaInstagram style={{color:'rgb(245, 133, 41)'}} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
