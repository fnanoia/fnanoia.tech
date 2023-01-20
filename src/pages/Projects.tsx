import FourDevs from "../components/projects/FourDevs";
import HomeServer from "../components/projects/HomeServer";
import Open2work from "../components/projects/Open2work";
import Plantiva from "../components/projects/Plantiva";

const Projects = () => {

    return (
        <div id="projects" className=" text-gray-300 py-8">

            <div
                className="flex flex-col justify-center items-center"

            >
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 pb-8'>

                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#A81D33]'>
                            Projects
                        </p>
                    </div>
                </div>


                <div className='flex flex-wrap space-y-20'>
                    <FourDevs />
                    <Open2work />
                    <Plantiva />
                    <HomeServer />
                </div>

            </div>

        </div>

    );
};

export default Projects;

/**
 * 
 * 
 *  
 

 */