import { NavLink } from "react-router-dom";

const Menus = () => {

    const hour = new Date().getHours();
    let greeting = "";
    if (hour >= 0 && hour < 12) {
        greeting = "Good Morning";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    const scrollToProjects = () => {
        setTimeout(() => {
            const projectsElement = document.getElementById('projects');
            projectsElement.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }
    const scrollToAbout=()=>{
        setTimeout(() => {
            const AboutsElement = document.getElementById('about');
            AboutsElement.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }
    const scrollToContacts=()=>{
        setTimeout(() => {
            const ContactsElement = document.getElementById('contacts');
            ContactsElement.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }
    const scrollToExperience=()=>{
        setTimeout(() => {
            const ExperienceElement = document.getElementById('experience');
            ExperienceElement.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }
    return ( 
        <div className="flex justify-between items-center p-2.5 menu">
            <div>
                <h2 className='text-2xl mx-3 text-yellow-500 greetings'>{greeting}</h2>
            </div> 
            <ul className="flex  h-10 space-x-5 items-center mx-5 text-xl text-blue-500 menuItems">
                <li><NavLink exact='true' to="/" ><b>Home</b></NavLink></li>
                <li><NavLink onClick={scrollToProjects} to="/projects"><b>Projects</b></NavLink></li>
                <li><NavLink onClick={scrollToExperience} to="/experience" ><b>Experience</b></NavLink></li>
                <li><NavLink onClick={scrollToContacts} to="/contacts" ><b>Contacts</b></NavLink></li>
                <li><NavLink onClick={scrollToAbout} to="/about" ><b>About</b></NavLink></li>
            </ul>
        </div>
     );
}
 
export default Menus;
