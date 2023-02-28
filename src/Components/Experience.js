import { NavLink } from "react-router-dom";
const Experience = () => {
  return (
    <div id="experience" className="mx-auto px-6 sm:px-10 md:px-20 about">
      <h1 className="text-2xl text-yellow-500 underline text-white text-center">
        My Experience
      </h1>
      <div className="flex flex-col md:flex-row justify-between text-white space-y-6 md:space-y-0 md:space-x-10 mt-6">
        <div className="w-full md:w-1/2">
          <p>
            I am a skilled web developer experienced in <span className="text-yellow-300">HTML, CSS, JavaScript,
            Node.js, React, MySQL, and Tailwind CSS</span>. I create efficient and
            user-friendly web applications. Check out my Projects <span className="text-red-400 underline"><NavLink to="/projects">here</NavLink>
</span>
          </p>
          <br />
          <p>
            I am a skilled graphic designer who excels in creating visually
            appealing designs using{" "}
            <span className="text-yellow-300">Adobe Photoshop, Lightroom, and Illustrator</span>. My
            experience also includes creating animations with{" "}
            <span className="text-yellow-300">Blender</span> and 
            <span className="text-yellow-300"> After Effects</span>, and editing videos using{" "}
            <span className="text-yellow-300">Premier Pro</span>. My commitment to delivering exceptional
            results that enhance the overall user experience sets me apart, and
            I am dedicated to exceeding expectations in all my work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
