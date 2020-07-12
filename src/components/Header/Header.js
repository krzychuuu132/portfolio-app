import React from 'react';

import Navigation from "../Navigation/Navigation";
import Logo from '../Logo/Logo';
import './Header.scss';

const Header = () => {

    const navigationList = [

        {id:0,title:'O mnie',data_page:'about-me'},
        {id:1,title:'Projekty',data_page:'projects'},
        {id:2,title:'Umiejętności',data_page:'abilities'},
        {id:3,title:'Technologie',data_page:'technologies'},
        {id:4,title:'Kontakt',data_page:'contact'},

    ]

    return ( 

        <header className="header">
                <Logo />
                <Navigation navigationList={navigationList} ></Navigation>
        </header>

    );
}
 
export default Header;