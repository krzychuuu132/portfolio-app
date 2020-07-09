import React from 'react';

import Navigation from "../Navigation/Navigation";
import Logo from '../Logo/Logo';
import './Header.scss';

const Header = () => {

    const navigationList = [

        {id:0,title:'O mnie'},
        {id:1,title:'Projekty'},
        {id:2,title:'Umiejętności'},
        {id:3,title:'Technologie'},
        {id:4,title:'Kontakt'},

    ]

    return ( 

        <header className="header">
                <Logo />
                <Navigation navigationList={navigationList} ></Navigation>
        </header>

    );
}
 
export default Header;