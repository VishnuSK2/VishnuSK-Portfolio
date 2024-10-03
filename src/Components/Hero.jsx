import React, { useEffect } from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import gsap from 'gsap';

function Hero() {
  useEffect(() => {
    gsap.fromTo("#hleft p", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
    gsap.fromTo("#hleft h1", { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1, delay: 1 });
    gsap.fromTo("#hleft h2", { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1, delay: 1.5 });
    gsap.fromTo("#hleft .button-hero", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, delay: 2 });
    gsap.fromTo("#hleft .fs-3", { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 1, delay: 2.5 });
    gsap.fromTo("#hright img", { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1.5, delay: 1 });
  }, []);

  return (
    <div id='hero' className='mt-5'>
      <div className="container w-75" >
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 text-light" style={{marginTop:'80px'}} id='hleft'>
            <p className=' mt-5 m-0' style={{fontSize:'20px'}}>Hello <img src="https://vinayaksingh.com/static/media/Hello.d93720933c608f6178fb.gif" alt="hand" height={25} />, I'm</p>
            <h1 className='m-0 fw-bold'>Vishnu S.K</h1>
            <h2 className='fs-5 mt-3'style={{color:"rgb(0, 255, 127)"}}>Full Stack Developer</h2>
            <div className='button-hero'>
              <a href="#contact"><button className='btn fw-bold text-dark fs-6 mt-3 rounded-5 px-5'  style={{background:"rgb(0, 255, 127)"}}>Contact</button></a>
            </div>
            <div className='fs-3 mt-4'>
              <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3B7M70A2AsS4SECeGFJEGxEA%3D%3D" target='_blank'> <FaLinkedin style={{color:'rgb(10, 102, 194)'}} className='me-3' /></a>
              <a href="https://github.com/VishnuSK2" target='_blank'><FaGithub className='me-3' style={{color:"white"}} /></a>
              <a href="https://wa.me/<917356139191>" target='_blank'><FaWhatsapp style={{color:'rgb(37, 211, 102)'}} className='me-3'/></a>
              <a href="https://www.instagram.com/____s_k.___?igsh=YXQ3NHRhczVpYW91" target='_blank'><FaInstagram style={{color:'rgb(245, 133, 41)'}} /></a>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 mt-5" id='hright'>
          <img src="https://vinayaksingh.com/static/media/illustration.cf4b7a67f23b684549c4f797c62b527a.svg" alt="hero pic1" className='w-100 mt-5' id='img' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
