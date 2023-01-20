const About = () => {
  return (
    <div id="about" className='w-full h-screen text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#A81D33]'>
              About
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Welcome to my portfolio</p>
          </div>
          <div>
            <p>
              I'm 26 years old, currently living in Argentina.
              I'm a Fullstack Developer who works with the MERN/PERN stack. I'm also into Cybersecurity and
              Networking. My work environment is setted on Debian Linux, whose
              stable OS enhance my coding experience.
            </p>
            <br />
            <p>
              I did a large number of courses and trainings both in institutions such as  {" "}
              <a href="https://www.nocountry.tech/" className="underline hover:text-[#A81D33]">
                Coderhouse
              </a> (Javascript, React, Backend Development) and {" "}
              <a href="https://www.nocountry.tech/" className="underline hover:text-[#A81D33]">
                Cisco Netacad
              </a> (Cybersecurity and Networking), as well as in a self-taught way.
            </p>
            <br />
            <p>
              I'm working on freelance/trainee development projects, and loooking for a job
              in IT within a enterprise environment, which allows me to boost my
              knowledge and learn from professionals. I consider myself a person who
              brings enthusiasm and is capable of organizing contexts in order to
              solve problems efficiently.
            </p>
            <br />
            <p>
              I have experience working in Junior/Trainee projects and contributing to the open-source community.
              Currently participating in{" "}
              <a href="https://www.nocountry.tech/" className="underline hover:text-[#A81D33]">
                NoCountry
              </a>
              , where I develop mobile/web apps in a full dev's team. We practice scrum/agile methodologies in order to
              communicate assertively and optimize our projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 