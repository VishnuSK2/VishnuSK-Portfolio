import React, { useEffect, useRef } from 'react';
import { CiFolderOn } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import { VscLinkExternal } from 'react-icons/vsc';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const projectRefs = useRef([]);

  useEffect(() => {
    projectRefs.current.forEach((project) => {
      gsap.fromTo(
        project,
        { opacity: 0, scale: 0.5, rotateY: 90 },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 1,
          scrollTrigger: {
            trigger: project,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className='projects mt-5' id='project'>
      <div className="container text-light">
        <h1 className='text-center fw-bold'>My Projects</h1>
        
        <div className="d-flex justify-content-around mt-4" id='row1'>
          <div className="border p-4 rounded-4 project-card" ref={(el) => projectRefs.current[0] = el} id='projects'>
            <div className='d-flex justify-content-between' id='icon' >
              <div className='fs-1'>
                <CiFolderOn />
              </div>
              <div className='fs-2 mt-2 ms-5'>
                <a href="https://github.com/VishnuSK2/TrustWave" target='_blank' style={{color:"rgb(0, 255, 127)"}}><FaGithub className='ms-5' /></a>
                <a href="https://trustwave.netlify.app" target='_blank' style={{color:"rgb(0, 255, 127)"}}><VscLinkExternal className='ms-2' /></a>
              </div>
            </div>
            <h4 className='mt-3'>Trust Wave Bank App</h4>
            <p className='mt-3' style={{textAlign:'justify'}}>
              Trust Wave Bank App is a full-featured banking application built to provide users with a secure and seamless experience for managing their finances. Developed using <span className='fw-bold'> HTML, CSS, and JavaScript,</span> the app allows users to authenticate securely, view real-time account balances and transfer funds between accounts. It features a responsive design optimized for both mobile and desktop use, ensuring accessibility on any device. The app is built with a focus on security, robust error handling, and data validation, making it a reliable platform for financial management.
            </p>
          </div>

          <div className="border p-4 rounded-4 project-card" ref={(el) => projectRefs.current[1] = el} id='projects'>
            <div className='d-flex justify-content-between' id='icon' >
              <div className='fs-1'>
                <CiFolderOn />
              </div>
              <div className='fs-2 mt-2 ms-5'>
              <a href="https://github.com/VishnuSK2/Frontend-media" target='_blank' style={{color:"rgb(0, 255, 127)"}}><FaGithub className='ms-5' /></a>
              <a href="https://frontend-media-m7nj.vercel.app/" target='_blank' style={{color:"rgb(0, 255, 127)"}}><VscLinkExternal className='ms-2' /></a>
              </div>
            </div>
            <h4 className='mt-3'>Media Player</h4>
            <p className='mt-3' style={{textAlign:'justify'}}>
              Media Player is a responsive web application developed with <span className='fw-bold'>React</span> that allows users to play video files seamlessly. The player supports various media formats and offers essential features like play, pause, forward, rewind, and volume control. It includes a user-friendly interface with an intuitive layout, making it easy for users to browse and select media files. The application is optimized for both desktop and mobile devices, ensuring smooth playback and control across platforms. This project demonstrates strong front-end development skills, focusing on dynamic UI updates and efficient state management in React.
            </p>
          </div>

          <div className="border p-4 rounded-4 project-card" ref={(el) => projectRefs.current[2] = el} id='projects'>
            <div className='d-flex justify-content-between' id='icon' >
              <div className='fs-1'>
                <CiFolderOn style={{color:"rgb(0, 255, 127)"}} />
              </div>
              <div className='fs-2 mt-2 ms-5'>
              <a href="https://github.com/VishnuSK2/BMI" target='_blank' style={{color:"rgb(0, 255, 127)"}}><FaGithub className='ms-5' /></a>
              <a href="https://bmiv.netlify.app" target='_blank' style={{color:"rgb(0, 255, 127)"}}><VscLinkExternal className='ms-2' /></a>
              </div>
            </div>
            <h4 className='mt-3'>BMI Calculator</h4>
            <p className='mt-3' style={{textAlign:'justify'}}>
              BMI Calculator is a simple and responsive web application built using <span className='fw-bold'> HTML, CSS, and JavaScript,</span> that helps users calculate their Body Mass Index (BMI) based on their height and weight. The app features a clean interface where users can input their data, and it instantly calculates and categorizes the BMI into underweight, normal weight, overweight, or obese according to standard BMI ranges. The calculator provides real-time feedback and clear visual cues to indicate the user's health status. It is optimized for both mobile and desktop devices, ensuring a smooth user experience across all platforms.
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-around mt-3" id='row1'>
          <div className="border p-4 rounded-4 project-card" ref={(el) => projectRefs.current[3] = el} id='projects'> 
            <div className='d-flex justify-content-between' id='icon' >
              <div className='fs-1'>
                <CiFolderOn />
              </div>
              <div className='fs-2 mt-2 ms-5'>
              <a href="https://github.com/VishnuSK2/Microsoft-clone" target='_blank' style={{color:"rgb(0, 255, 127)"}}><FaGithub className='ms-5' /></a>
              <a href="#" target='_blank' style={{color:"rgb(0, 255, 127)"}}><VscLinkExternal className='ms-2' /></a>
              </div>
            </div>
            <h4 className='mt-3'>Microsoft Static Clone Website</h4>
            <p className='mt-3' style={{textAlign:'justify'}}>
              Microsoft Static Clone Website is a pixel-perfect replica of Microsoft's homepage, developed using <span className='fw-bold'>HTML, CSS, and Bootstrap.</span> This project showcases a clean, responsive design that mimics the layout, structure, and aesthetics of the original website. The use of Bootstrap ensures the site adapts seamlessly to different screen sizes, offering a consistent user experience across desktops, tablets, and mobile devices. The clone includes interactive elements like navigation menus, feature sections, and call-to-action buttons, closely resembling the actual Microsoft site while focusing on front-end development best practices.
            </p>
          </div>

          <div className="border p-4 rounded-4 project-card" ref={(el) => projectRefs.current[4] = el} id='projects'>
            <div className='d-flex justify-content-between' id='icon' >
              <div className='fs-1'>
                <CiFolderOn />
              </div>
              <div className='fs-2 mt-2 ms-5'>
              <a href="https://github.com/VishnuSK2/EDUPro" target='_blank' style={{color:"rgb(0, 255, 127)"}}><FaGithub className='ms-5' /></a>
              <a href="https://eduproweb.netlify.app" target='_blank' style={{color:"rgb(0, 255, 127)"}}><VscLinkExternal className='ms-2' /></a>
              </div>
            </div>
            <h4 className='mt-3'>EduPro Study Platform</h4>
            <p className='mt-3' style={{textAlign:'justify'}}>
              EduPro Study Platform Static Website is a clean and visually appealing static web application developed using <span className='fw-bold'>HTML, CSS, and Bootstrap</span> to showcase a fictional online learning platform. The website features a professional design with multiple sections, including course offerings, testimonials, and an overview of educational services. Although static, the layout is fully responsive, adapting to different screen sizes for both desktop and mobile users. The project highlights the use of Bootstrap for grid layouts and styling, creating a user-friendly interface that mirrors modern e-learning platforms.
            </p>
          </div>

          <div className="border p-4 rounded-4 project-card" ref={(el) => projectRefs.current[5] = el} id='projects'>
            <div className='d-flex justify-content-between' id='icon' >
              <div className='fs-1'>
                <CiFolderOn />
              </div>
              <div className='fs-2 mt-2 ms-5'>
              <a href="https://github.com/VishnuSK2/Headphones" target='_blank' style={{color:"rgb(0, 255, 127)"}}><FaGithub className='ms-5' /></a>
              <a href="https://headphonesadd.netlify.app" target='_blank' style={{color:"rgb(0, 255, 127)"}}><VscLinkExternal className='ms-2' /></a>
              </div>
            </div>
            <h4 className='mt-3'>Headphones E-commerce Static Website</h4>
            <p className='mt-3' style={{textAlign:'justify'}}>
              Headphones E-commerce Static Website is a stylish and responsive static site designed to showcase a range of headphones and audio products. Developed using <span className='fw-bold'>HTML, CSS, and Bootstrap,</span> the website features a modern layout that highlights product images, descriptions, and pricing. With a focus on user experience, the design includes intuitive navigation, product filtering, and a responsive grid layout that adapts seamlessly to various screen sizes. The project demonstrates strong front-end development skills, emphasizing visually appealing design and efficient use of CSS and Bootstrap for styling.
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-around mt-3" id='row1'>
          <div className="border p-4 rounded-4 project-card" ref={(el) => projectRefs.current[6] = el} id='projects'> 
            <div className='d-flex justify-content-between' id='icon' >
              <div className='fs-1'>
                <CiFolderOn />
              </div>
              <div className='fs-2 mt-2 ms-5'>
              <a href="https://github.com/VishnuSK2/Bunfun" target='_blank' style={{color:"rgb(0, 255, 127)"}}><FaGithub className='ms-5' /></a>
              <a href="https://bunfun.netlify.app/" target='_blank' style={{color:"rgb(0, 255, 127)"}}><VscLinkExternal className='ms-2' /></a>
              </div>
            </div>
            <h4 className='mt-3'>Bun Fun</h4>
            <p className='mt-3' style={{textAlign:'justify'}}>
            Bun Fun is an engaging web application developed using <span className='fw-bold'>HTML, CSS, JavaScript, and GSAP (GreenSock Animation Platform)</span> that provides users with an interactive experience focused on animated bun-themed activities. The project showcases a visually appealing layout with vibrant graphics and smooth animations powered by GSAP, enhancing user interaction. Users can explore various fun features, such as interactive animations that respond to user inputs and playful elements that bring the theme to life. The combination of CSS for styling and JavaScript for functionality ensures a dynamic and enjoyable user experience, demonstrating a strong command of front-end development and animation techniques
            </p>
          </div>

          <div className="border p-4 rounded-4 project-card" ref={(el) => projectRefs.current[7] = el} id='projects'>
            <div className='d-flex justify-content-between' id='icon' >
              <div className='fs-1'>
                <CiFolderOn />
              </div>
              <div className='fs-2 mt-2 ms-5'>
              <a href="https://github.com/VishnuSK2/Random-quotes" target='_blank' style={{color:"rgb(0, 255, 127)"}}><FaGithub className='ms-5' /></a>
              <a href="https://random-quotes-lyart.vercel.app/" target='_blank' style={{color:"rgb(0, 255, 127)"}}><VscLinkExternal className='ms-2' /></a>
              </div>
            </div>
            <h4 className='mt-3'>Random Quote Generator</h4>
            <p className='mt-3' style={{textAlign:'justify'}}>
            Random Quote Generator is an interactive web application built with <span className='fw-bold'>React</span> that fetches and displays random quotes from an external API. The application features a user-friendly interface where users can click a button to generate new quotes, complete with author attributions and relevant categories. Utilizing React's state management and hooks, the app ensures seamless updates to the displayed quotes, enhancing the user experience. The design is clean and responsive, making it accessible on both desktop and mobile devices. This project showcases skills in React development, API integration, and creating dynamic user interfaces
            </p>
          </div>

          <div className="border p-4 rounded-4 project-card" ref={(el) => projectRefs.current[8] = el} id='projects'>
            <div className='d-flex justify-content-between' id='icon' >
              <div className='fs-1'>
                <CiFolderOn />
              </div>
              <div className='fs-2 mt-2 ms-5'>
              <a href="https://github.com/VishnuSK2/Parallax-website" target='_blank' style={{color:"rgb(0, 255, 127)"}}><FaGithub className='ms-5' /></a>
              <a href="https://supernaturalparallax.netlify.app/" target='_blank' style={{color:"rgb(0, 255, 127)"}}><VscLinkExternal className='ms-2' /></a>
              </div>
            </div>
            <h4 className='mt-3'>Supernatural Parallax Website</h4>
            <p className='mt-3' style={{textAlign:'justify'}}>
            Supernatural Parallax Website is a visually captivating web experience designed to showcase content related to the supernatural theme using <span className='fw-bold'>HTML, CSS, and JavaScript</span> with a parallax scrolling effect. The website features multiple sections that reveal stunning images and engaging text as users scroll down the page, creating an immersive storytelling experience. Utilizing CSS for styling and JavaScript for the parallax effect, the site enhances user engagement through smooth transitions and dynamic content presentation. The responsive design ensures that the parallax effect is preserved across various devices, making it an impressive display of front-end development skills focused on user interaction and visual appeal.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;
