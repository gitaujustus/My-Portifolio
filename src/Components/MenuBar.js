import { NavLink } from "react-router-dom";

const Menus = () => {
    return ( 
        <div className="flex justify-between items-center p-2.5 menu">
            <div>
                <h2 className='text-2xl mx-3 text-white'>Gitau Justus</h2>
            </div>
            <ul className="flex  h-10 space-x-5 items-center mx-5 text-xl menuItems">
                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
                <li><NavLink to="/" activeClassName="active">Experience</NavLink></li>
                <li><NavLink to="/" activeClassName="active">Contacts</NavLink></li>
                <li><NavLink to="/" activeClassName="active">About</NavLink></li>
            </ul>
        </div>
     );
}
 
export default Menus;
