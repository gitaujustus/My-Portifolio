import Justus from "../photos/Justus.png";
import "../index.css";
import { BsFacebook } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="my-16 md:mr-32">
        <img className="h-96 myImage" src={Justus} alt="My photo" />
      </div >
      <div className="my-32 w-full md:w-1/2 mybio">
        <h1 className="text-2xl text-white">Welcome |</h1>
        <h1 className="text-xl text-red-500">I Am Software Engineer</h1>
        <div className="w-96 md:max-w-md">
          <p className="text-white">
            I'm Justus Gitau, a full-stack developer studying software
            engineering at University of Eastern Africa, Baraton. I have a
            strong interest in artificial intelligence and machine learning, and
            enjoy reading and listening to music in my free time. As an avid
            traveler and explorer, I incorporate my experiences and insights
            into my work, constantly pushing the boundaries of what's possible
            in web development.
          </p>
        </div>

        <br />
        <div className="flex space-x-5">
          <BsFacebook size={26} className="text-white" />
          <IoLogoWhatsapp size={26} className="text-green-500" />
          <BsFacebook size={26} className="" />
          <BsFacebook size={26} className="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
