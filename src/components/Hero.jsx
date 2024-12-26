import React from 'react'
import Profile from '../assets/profile.jpg'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import {motion} from 'framer-motion'
import '../components/Css/Hero.css'
import { Download } from 'lucide-react'
// import BG from '../assets/bg.png'
// import Navbar from './Navbar';

const Hero = () => {

    const handleDownload = () => {
        // URL for the resume
        const resumeUrl = 'https://drive.google.com/file/d/1G3xco6TYQowA87W7DYo72FhMyY4SDYOD/view?usp=sharing'; // Ensure this file exists in the public folder
        const anchor = document.createElement('a');
        anchor.href = resumeUrl;
        anchor.download = 'Aditya_Maurya_Resume.pdf'; // Set the downloaded file name
        anchor.click();
    };


    return (
        <section 
        // style={{ backgroundImage: `url(${BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }} 
        id="hero" className="h-max md:h-screen bg-gradient-to-l from-gray-950 to-gray-950 text-white flex flex-col justify-center items-center relative z-10 pb-10">
            <div className='' id='stars'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {/* <div className='bg-black inset-0 opacity-65 absolute '></div> */}
            <div className='max-w-7xl mt-24 mx-auto items-center flex flex-col md:flex-row gap-16 md:gap-40 justify-between'>
                <div className='md:space-y-6  px-4'>
                    <motion.h1 
                    initial={{opacity:0, x:-100}}
                    whileInView={{opacity:1,x:0}}
                    transition={{duration:1, delay:0.2}}
                    className="md:text-6xl text-4xl font-bold mb-4">Hi👋, I'm <p className='text-blue-400 '>Aditya Maurya</p></motion.h1>
                    <motion.p 
                    initial={{opacity:0, x:-100}}
                    whileInView={{opacity:1,x:0}}
                    transition={{duration:1.2, delay:0.4}}
                    className="md:text-2xl text-lg mb-3  md:mb-6">Full-Stack Developer | MERN Stack Enthusiast</motion.p>
                    <motion.p 
                    initial={{opacity:0, x:-100}}
                    whileInView={{opacity:1,x:0}}
                    transition={{duration:1.4, delay:0.5}}
                    className='lg:w-[600px] mb-4 md:mb-0 text-sm text-gray-300'>I am a final year student pursuing a BTech in Electronics and Communication Engineering from Madan Mohan Malaviya University of Technology, Gorakhpur, Batch-2025.

                    Additionally, I am passionate about Competitive Programming and Web Development. My notable accomplishments in this field include:
                    
                    My proficiency spans several technologies, including C/C++ and JavaScript, as well as frameworks like React, Node.js, and Express.js. I also possess experience in full-stack development using the MERN stack.
                    
                    Driven by a passion for continuous learning and innovation, I am actively seeking internship or full-time opportunities in the Software Development field. Please feel free to reach out to me at adityamaurya0401@gmail.com.</motion.p>
                    <motion.button
                    initial={{opacity:0, x:-100}}
                    whileInView={{opacity:1,x:0}}
                    onClick={handleDownload}
                    transition={{duration:1.4, delay:0.5}}
                        href="#projects"
                        className="px-3 py-2 flex items-center gap-2 bg-blue-500 rounded-md text-white hover:bg-blue-600  shadow-blue-500 border-2  border-blue-400 transition-all shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC]"
                    >
                        <Download className='w-5 h-5'/> Download CV 
                    </motion.button>
                    <div className='flex gap-3 text-2xl transition-all mt-5 md:mt-0'>
                    <a href='https://www.facebook.com/profile.php?id=100075548629924'> <FaFacebook className='hover:text-blue-400' /></a>
                     <a href='https://www.instagram.com/aditya_maurya04/'>  <FaInstagram className='hover:text-blue-400' /></a>
                       <a href='https://www.linkedin.com/in/aditya-maurya-560a02227/'><FaLinkedin className='hover:text-blue-400' /></a>
                      <a href='https://x.com/Aditya_Maurya04'>  <FaSquareXTwitter className='hover:text-blue-400' /></a>
                    </div>
                </div>
                <div className='relative group'>
                    {/* <motion.div 
                    initial={{opacity:0, scale:0.5}}
                    whileInView={{opacity:1,scale:1}}
                    transition={{duration:1.4, delay:0.2}}
                    className='bg-blue-500 md:w-[500px] w-[350px] h-[350px] md:h-[500px] absolute rounded-full blur-lg '></motion.div> */}
                    <motion.img 
                    initial={{opacity:0, scale:0.5}}
                    whileInView={{opacity:1,scale:1}}
                    transition={{duration:1.4, delay:0}}
                    src={Profile} alt="" className='rounded-full border border-blue-600 md:w-[500px] w-[300px] shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)]   shadow-blue-500 ' />
                </div>
            </div>
        </section>
    )
}

export default Hero
