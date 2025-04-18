import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi,my name is </p>
        <h1 className="text-4l sm:text-7xl font-bold text-[#ccd6f6]">
          M. Zaid Dagbanbia
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] text-justify">
          I am a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building responsive full-stack web applications.However, I enjoyed
          back end the most.
        </p>
        <div>
        <Link activeClass="active" to="work" smooth={true} duration={500}>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
          
            View Work <span className="group-hover:rotate-90 duration-300">
            
              <HiArrowNarrowRight className="ml-3"/>
              </span> 
         
            
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
