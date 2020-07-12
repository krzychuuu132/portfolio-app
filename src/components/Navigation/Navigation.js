import React,{useState ,useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap'

import './Navigation.scss';

const Navigation = ({navigationList}) => {

    const [ activeMenu, setActiveMenu ] = useState(false);

    const listRef = useRef(null);

    if(activeMenu){
        gsap.fromTo(listRef.current.children,{opacity:0,x:100,scale:0},{delay:.3, duration:.3,opacity:1,x:0,scale:1,stagger:.3})
    }

    const handleLinkClick = (e,id) => {
        const sections = document.querySelectorAll('.section');

        const section = sections[id]

        const sectionInfo = section.getBoundingClientRect().top;
        console.log(sectionInfo)
        window.scrollTo(0,section.offsetTop-100)
    }

    return (
        <>

        <button className={activeMenu? 'hamburger hamburger--active':'hamburger' } onClick={()=>setActiveMenu(!activeMenu)}>
            <span className="hamburger__wrapper">
                <span className="hamburger__line"></span>
            </span>


        </button>

        <nav className={activeMenu? 'navigation navigation--active':'navigation' }>

                <ul className="navigation__list" ref={listRef}>

                            {
                                navigationList.map(navigationElement=><li key={navigationElement.id} className="navigation__item"><Link className="navigation__link" data-page={navigationElement.data_page} onClick={(e)=>handleLinkClick(e,navigationElement.id)}>{navigationElement.title}</Link></li>)
                            }

                            

                </ul>
                
        </nav>
        <div className="navigation__active-element"></div>
        </>
    );
}
 
export default Navigation;