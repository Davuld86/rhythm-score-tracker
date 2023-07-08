import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import './NavBar.css'


function NavBar(){
    const [sidebar,setSideBar] = useState(false)

    const showSidebar = () => setSideBar(!sidebar)

    return(
        <Fragment>
        <Link to= '#' className='menu-bars'>
        <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
        <nav className={sidebar? 'nav-menu active': 'nav-menu'}>
            <ul className=" nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                    <Link to='#' className='menu-bars'>
                        <AiIcons.AiOutlineClose/>
                    </Link>
                </li>
                {SidebarData.map((item, index)=>{
                    return(
                        <li key={index} className={item.cName}>
                            {item.icon} 
                            
                            <Link to={item.path}>
                            <span>{item.title}</span>
                            </Link>
                            
                        </li>
                    )
                })}
            </ul>
        </nav>
        </Fragment>
    )
}


export default NavBar