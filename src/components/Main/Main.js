import React,{ useEffect } from 'react';

import About_me from '../About_me/About_me';
import My_projects from '../My_projects/My_projects';
import My_abilities from '../My_abilities/My_abilities';
import My_technoliogies from '../My_technoliogies/My_technoliogies';
import My_contact from '../My_contact/My_contact';

import './Main.scss';


const Main = () => {

    useEffect(()=>{

        const sections = document.querySelectorAll('.section');
        console.log(sections)

        const options = {
            threshold:1
        }

        let observer = new IntersectionObserver(checkNavigation, options);

        sections.forEach(section=>{
            observer.observe(section);
        })


    },[])

    

    const checkNavigation = (entries) =>{
        const active_element = document.querySelector('.navigation__active-element');
        console.log(entries)
            entries.forEach(entry=> {
                const className = entry.target.dataset.name;
                const activeLink = document.querySelector(`[data-page=${className}]`);
               
                const link = activeLink.getBoundingClientRect();
              
                const stylesProperty = {
                    width: link.width,
                    height: link.height,
                    top: link.top,
                    left: link.left
                }

                if(entry.isIntersecting) {
                    active_element.style.setProperty('left',`${stylesProperty.left}px`);
                    active_element.style.setProperty('top',`${stylesProperty.top}px`);
                    active_element.style.setProperty('width',`${stylesProperty.width}px`);
                    active_element.style.setProperty('height',`${stylesProperty.height}px`);
                }
            })
    }

    return ( 

        <main className="main">

            <About_me />
            <My_projects />
            <My_abilities />
            <My_technoliogies />
            <My_contact />

        </main>

     );
}
 
export default Main;