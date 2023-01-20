import Backend from "../components/skills/Backend";
import Cloud from "../components/skills/Cloud";
import ProjectManagement from "../components/skills/ProjectManagment";
import Frontend from "../components/skills/Frontend";

const Skills = () => {
  return (
    <div id="skills" className=' text-gray-300 py-10'>

      <div
        className="flex flex-col justify-center items-center">
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 pb-8'>

          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#A81D33]'>
              Skills
            </p>
          </div>
        </div>


        <div className='flex flex-wrap space-y-10'>
          <Backend />
          <Frontend />
          <Cloud />
          <ProjectManagement />

        </div>

      </div>

    </div>

  );
};

export default Skills;