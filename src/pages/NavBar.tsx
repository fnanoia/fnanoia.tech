import { scrollHome, scrollAbout, scrollProjects, scrollStudies, scrollSkills } from "../components/navbar/ScrollNav";
import { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

import { Link } from 'react-scroll';

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (


    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-300'>
      <div>
        <img src="/assets/debian.svg" alt='Logo Image' style={{ width: '50px' }} />
      </div>

      {/* menu */}
      <ul className='hidden space-x-20  md:flex'>
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}>
          <li>
            Home
          </li>
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}>
          <li>
            About
          </li>
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={500}>
          <li>
            Projects
          </li>
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          duration={500}>
          <li>
            Skills
          </li>
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}>
          <li>
            Contact
          </li>
        </Link>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen  flex flex-col justify-center items-center bg-[#A81D33]'
        }
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}>
          <li className='py-6 text-4xl'>
            Home
          </li>
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}>
          <li className='py-6 text-4xl'>
            About
          </li>
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={500}>
          <li className='py-6 text-4xl'>
            Projects
          </li>
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          duration={500}>
          <li className='py-6 text-4xl'>
            Skills
          </li>
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}>
          <li className='py-6 text-4xl'>
            Contact
          </li>
        </Link>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/fnanoia/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300 '
              href='https://github.com/fnanoia'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:nanoiafrancisco@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href="/assets/francisconanoiacv.pdf"
              download="FranciscoNanoiaCV.pdf"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;

/*
<div className="flex justify-center items-center text-center p-4 font-mono tracking-widest">
 <div className="w-32 hover:underline underline-offset-8 decoration-4"><a onClick={scrollAbout}>about</a></div>
      <div className="w-32 hover:underline underline-offset-8 decoration-4"><a onClick={scrollSkills}>skills</a></div>
      <div className="w-32 hover:underline underline-offset-8 decoration-4"><a onClick={scrollProjects}>projects</a></div>
       </div>
*/