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
                                navigationList.map(navigationElement=><li key={navigationElement.id} className="navigation__item"><Link className="navigation__link">{navigationElement.title}</Link></li>)
                            }

                </ul>

        </nav>

        </>
    );
}
 
export default Navigation;