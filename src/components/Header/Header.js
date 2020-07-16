import React,{useEffect,useRef} from 'react';

import Navigation from "../Navigation/Navigation";
import Logo from '../Logo/Logo';
import './Header.scss';

const Header = () => {

    const headerRef = useRef(null);

  const handleScroll = () =>{

    if(window.scrollY>0){
        headerRef.current.style.backgroundColor = '#3a3939'
    }
    else{
        headerRef.current.style.backgroundColor = 'transparent';
    }

    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
    },[])

    const navigationList = [

        {id:0,title:'O mnie',data_page:'about-me'},
        {id:1,title:'Projekty',data_page:'projects'},
        {id:2,title:'Umiejętności',data_page:'abilities'},
        {id:3,title:'Technologie',data_page:'technologies'},
        {id:4,title:'Kontakt',data_page:'contact'},

    ]

    return ( 

        <header className="header" ref={headerRef}>
                <Logo />
                <Navigation navigationList={navigationList} ></Navigation>
        </header>

    );
}
 
export default Header;