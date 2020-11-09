import React,{ useEffect,useRef,useState } from 'react';
import gsap from 'gsap'; 
import { ScrollTrigger} from 'gsap/ScrollTrigger';

import About_me from '../About_me/About_me';
import My_projects from '../My_projects/My_projects';
import My_abilities from '../My_abilities/My_abilities';
import My_technoliogies from '../My_technoliogies/My_technoliogies';
import My_contact from '../My_contact/My_contact';

import './Main.scss';

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
    
    const [arrow,setArrow] = useState(false);
    const arrowRef  = useRef(null);
    const mainRef  = useRef(null);


 

    return ( 

        <main className="main" ref={mainRef}>

            <About_me />
            <My_projects />
            <My_abilities />
            <My_technoliogies />
            <My_contact />
           
        </main>

     );
}
 
export default Main;