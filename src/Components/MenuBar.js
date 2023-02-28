import { NavLink } from "react-router-dom";

const Menus = () => {
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
    return ( 
        <div className="flex justify-between items-center p-2.5 menu">
            <div>
                <h2 className='text-2xl mx-3 text-white'>Gitau Justus</h2>
            </div>
            <ul className="flex  h-10 space-x-5 items-center mx-5 text-xl menuItems">
                <li><NavLink exact='true' to="/" >Home</NavLink></li>
                <li><NavLink onClick={scrollToProjects} to="/projects">Projects</NavLink></li>
                <li><NavLink to="/skills" >Experience</NavLink></li>
                <li><NavLink onClick={scrollToContacts} to="/contacts" >Contacts</NavLink></li>
                <li><NavLink onClick={scrollToAbout} to="/about" >About</NavLink></li>
            </ul>
        </div>
     );
}
 
export default Menus;
