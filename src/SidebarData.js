import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi"

export const SidebarData =[
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Record New Score',
        path: '/add-score',
        icon: <AiIcons.AiOutlineForm/>,
        cName: 'nav-text'
    },
    {
        title: 'Dance Dance Revolution',
        path: '/ddr',
        icon: <GiIcons.GiSonicShoes/>,
        cName: 'nav-text'
    },
    {
        title: 'Clone Hero',
        path: '/clone-hero',
        icon: <FaIcons.FaGuitar/>,
        cName: 'nav-text'
    },
    {
        title: 'Music Diver',
        path: '/music-diver',
        icon: <FaIcons.FaDrum/>,
        cName: 'nav-text'
    }
]