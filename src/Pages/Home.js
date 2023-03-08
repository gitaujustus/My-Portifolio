import Justus  from "../photos/Justus G.png";
import "../index.css";
import { BsFacebook,BsInstagram,BsTwitter,BsGithub } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";


const Home = () => {
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="my-16 md:mr-32">
        <img className="h-96 myImage mx-20" src={Justus} alt="My photo" />
      </div>
      <div className="my-32 w-full md:w-1/2 mybio">
        <div className="welcome">
          <h1 className="text-2xl text-white welcomed">Welcome |</h1>
          <h1 className="text-xl text-yellow-500">I Am a Software Engineer</h1>
        </div>
        <div className="w-96 Bio">
          <p className="text-white">
            I'm <span className="text-blue-200">Justus Gitau</span>, a full-stack developer studying software
            engineering at University of Eastern Africa, Baraton. I have a
            strong interest in artificial intelligence and machine learning, and
            enjoy reading and listening to music in my free time. As an avid
            traveler and explorer, I incorporate my experiences and insights
            into my work, constantly pushing the boundaries of what's possible
            in web development.
          </p>
        </div>

        <br />
        <div className="flex space-x-5 sociallize">
          <a href="https://www.facebook.com/@justoegitau"><BsFacebook size={26} className="text-white" /></a>
          <a href="https://wa.me/254729144533"><IoLogoWhatsapp size={26} className="text-green-400" /></a>
          <a href="https://www.instagram.com/justoegitau"><BsInstagram size={26} className="text-red-300" /></a>
          <a href="https://www.twitter.com/@justoegitau"><BsTwitter size={26} className="text-blue-400" /></a>
          <a href="https://www.linkedin.com/in/justus-gitau-3a9837257/"><AiFillLinkedin size={26} className="" /></a>
          <a href="https://github.com/Young-Professor"><BsGithub size={26} className="" /></a>
        </div>
      </div>
    </div>
  );
};

export default Home;
