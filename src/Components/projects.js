import GuessGame from '../photos/GuessGame.png'
import Hotel from '../photos/Hotel.png'
import BlogWeb from '../photos/BlogWeb.png'
import challenge from '../photos/challenge.png'


const projects = () => {
  return (
    <div id='projects' className="mx-auto px-6 sm:px-10 md:px-20 about">
      <h1 className="text-2xl text-yellow-500 underline text-center p-4">Projects</h1>
      <div>
        <p className="text-white my-2">These are some of the projects which i have been working on:</p>
      <div className="flex justify-between projects">
        <div className="w-60 box-border ">
           <a href="https://blogging-website-five.vercel.app/" target="_blank"><img src={BlogWeb} alt="InnovateZone" /></a> 
        <p className='text-white'>Blog Website made with React, Nodejs/express and MySQL</p>
        <div className='flex justify-between'>
            <p className='text-yellow-500 underline'><a href="https://blogging-website-five.vercel.app/">preview</a></p>
            <p className='text-yellow-500 line-through'><a href="#">Source</a></p>
        </div>
        </div>
        <div className="w-60 box-border">
           <a href="https://young-professor.github.io/" target="_blank"><img src={Hotel} alt="Hotel MIS" /></a> 
        <p className='text-white'>Hotel MIS made with Html/Css, Javascript Languages</p>
        <div className='flex justify-between'>
          <p><a className='text-yellow-500 underline' href="https://young-professor.github.io/" target="_blank">Preview</a></p>
          <p><a className='text-yellow-500 underline' href="https://github.com/Young-Professor/Young-Professor.github.io" target="_blank">Source</a></p>
        </div>

        </div>
        <div className="w-60 box-border ">
        <a href="https://the-challenge-blue.vercel.app/" target="_blank"><img src={challenge} alt="the challenge" /></a>
          <p className='text-white'>Front End Clone using react and Tailwind Css</p>
          <div className='flex justify-between'>
          <p><a className='text-yellow-500 underline' href="https://the-challenge-blue.vercel.app/" target="_blank">Preview</a></p>
          <p><a className='text-yellow-500 underline' href="https://github.com/Young-Professor/Web.challenge" target="_blank">Source</a></p>
          </div>
        </div>
        <div className="w-60 box-border ">
          <a href="https://github.com/Young-Professor/Mind-GuessGame" target="_blank"><img src={GuessGame} alt="guessgame" /></a> 
          <p className='text-white'>Guess game made with Java Language</p>
          <div className='flex justify-between'>
          <p><a className='text-yellow-500 line-through' href="#">Preview</a></p>
          <p><a className='text-yellow-500 underline' href="https://github.com/Young-Professor/Mind-GuessGame" target="_blank">Source</a></p>
          </div>
        </div>
      </div>
      </div>
      <br />
    </div>
  );
};

export default projects;
