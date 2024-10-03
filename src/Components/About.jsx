import React, { useEffect } from 'react';
import { BiLogoMongodb } from 'react-icons/bi';
import { DiJavascript } from 'react-icons/di';
import { FaAngular, FaBootstrap, FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import profilePic from '../assets/Images/vishnu.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
  useEffect(() => {
    gsap.fromTo("#left", 
      { opacity: 0, x: -100 }, 
      { 
        opacity: 1, x: 0, 
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#left",
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

    gsap.fromTo("#profic-pic", 
      { scale: 0.8, rotation: 15, opacity: 0 }, 
      { 
        scale: 1, rotation: 0, opacity: 1, 
        duration: 1.5,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: "#profic-pic",
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

    gsap.fromTo("#lang", 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, y: 0, 
        duration: 1.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: "#lang",
          start: "top 90%", 
          toggleActions: "play none none reverse",
        }
      }
    );

  }, []);

  return (
    <div className='about' id='about'>
      <div className="container mt-1">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 text-light" id='left'>
            <h1 className='fs-1' style={{color:"rgb(0, 255, 127)"}}>About Me</h1>
            <p className='fs-6'>Hi, I’m a BSc Mathematics graduate and a certified Full Stack Developer from Luminar Technolab, Ernakulam. I have hands-on experience building modern web applications with technologies such as HTML, CSS, JavaScript, React, Angular, Express, Node.js, and MongoDB.</p>
            <p className='fs-6'>With a solid foundation in both front-end and back-end development, I’m passionate about creating dynamic, responsive web applications that deliver excellent user experiences. My academic background in Mathematics enhances my problem-solving skills, enabling me to approach coding challenges logically and efficiently.</p>
            <p className='fs-6'>I’m always looking for opportunities to grow my knowledge and contribute to exciting projects that make a difference.</p>
            <h2 className='fs-5 mt-4' style={{color:"rgb(0, 255, 127)"}}>Here are my main skills</h2>
            <div className='d-flex justify-content-between mt-3' id='lang'>
              <BiLogoMongodb style={{color:"RGB(71, 162, 72)"}} />
              <SiExpress style={{color:"RGB(75, 139, 59)"}} />
              <FaAngular style={{color:"RGB(221, 0, 49)"}} />
              <FaReact style={{color:"RGB(97, 218, 251)"}} />
              <FaNodeJs style={{color:"RGB(140, 200, 75)"}} />
              <FaHtml5 style={{color:"RGB(228, 77, 38)"}} />
              <FaCss3Alt style={{color:"RGB(21, 114, 182)"}} />
              <DiJavascript style={{color:"RGB(247, 223, 30)"}} />
              <FaBootstrap style={{color:"RGB(86, 61, 124)"}} />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center" id='profic-pic'>  
            <img src={profilePic} alt="" className='w-75 rounded-5' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
