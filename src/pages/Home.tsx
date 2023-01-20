import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div id='home' className='w-full h-screen'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#A81D33]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Francisco Jose Nanoia
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          Fullstack Dev
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a full-stack developer specialized in Backend services and a Cybersecurity student,
           enjoying building and designing exceptional applications. Currently focused on
          working with clean, tested and scalable solutions. Working on freelance projects.
        </p>
        <div>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#A81D33] hover:border-[#A81D33]'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
