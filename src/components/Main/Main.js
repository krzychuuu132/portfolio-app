import React,{ useEffect,useRef,useState } from 'react';
import gsap from 'gsap'; 

import About_me from '../About_me/About_me';
import My_projects from '../My_projects/My_projects';
import My_abilities from '../My_abilities/My_abilities';
import My_technoliogies from '../My_technoliogies/My_technoliogies';
import My_contact from '../My_contact/My_contact';

import './Main.scss';


const Main = () => {
    
    const [arrow,setArrow] = useState(false);
    const arrowRef  = useRef(null);

    useEffect(()=>{

        const sections = document.querySelectorAll('.section');
     

        const options = {
            threshold:0.7
        }

        let observer = new IntersectionObserver(checkNavigation, options);

        sections.forEach(section=>{
            observer.observe(section);
        })

        window.addEventListener('scroll',handleScroll)
    },[])

    const handleScroll  =() =>{
        if(window.scrollY >= 900) setArrow(true)
        else setArrow(false)
    }

    const checkNavigation = (entries) =>{
      
        const active_element = document.querySelector('.navigation__active-element');
        
            entries.forEach(entry=> {

                const section_name = entry.target.dataset.name;
                const section = entry.target;
                const sectionChildren = section.childNodes[1].children;
                

                const tl = gsap.timeline()

                if(section_name === 'technologies'){
                    
                    gsap.fromTo(sectionChildren,{opacity:0,scale:0.3},{opacity:1,scale:1,stagger:.2})
                }

                else if(section_name==='about-me'){

                    tl.fromTo( section.childNodes[0],{opacity:0,y:-100,scale:0.4},{duration:.5,delay:.2,opacity:1,y:0,scale:1});
                 
                    tl.fromTo( sectionChildren,{opacity:0,x:100},{duration:.3,opacity:1,x:0,stagger:.4});
                   
                }

                else if(section_name==='abilities'){

                     tl.fromTo(sectionChildren,{y:100,scale:.7,opacity:0},{duration:.4,y:0,scale:1,opacity:1,stagger:.2});

                }

                

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
            <button className={arrow?'arrow arrow--active':'arrow'} ref={arrowRef} onClick={()=>window.scrollTo(0,0)}>
                    <span className="fas fa-arrow-up arrow__icon"></span>
            </button>
        </main>

     );
}
 
export default Main;