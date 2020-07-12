import React,{ useEffect, useRef } from 'react';
import gsap from 'gsap';

import './MainPicture.scss';

import video from '../img/coding.mp4';
import video__medium from '../img/coding_medium.mp4';
import video__small from '../img/coding_small.mp4';
import video__smallest from '../img/coding_smallest.mp4';

const MainPicture = () => {

    const textRef = useRef(null);
    const subTextRef = useRef(null);
    const btnRef = useRef(null);

    const handleScroll = () =>{
      if(window.scrollY===0){
        animateContent();
      }
    }

    const animateContent = () =>{
        const tl = gsap.timeline({defaults:{ease:"power3.inOut"}});

        tl.fromTo(textRef.current,{opacity:0,scale:0.5},{delay:.1, duration:.6, opacity:1,scale:1});
        tl.fromTo(subTextRef.current,{opacity:0,scale:0.5},{delay:.1, duration:.6, opacity:1,scale:1});
        tl.fromTo(btnRef.current,{opacity:0,scale:0.5,y:100},{delay:.1, duration:.6, opacity:1,scale:1,y:0});
    }

    useEffect(()=>{
        animateContent();

        window.addEventListener('scroll',handleScroll);

    },[])

    return ( 
        <article className="article">
            <video  className="article__video" autoPlay >
                <source src={video} type="video/mp4" media="(max-width: 1600px)"/>
                <source src={video__medium} type="video/webm" media="(max-width: 1300px)"/>
                <source src={video__small} type="video/mp4" media="(max-width: 960px)"/>
                <source src={video__smallest} type="video/webm" media="(max-width: 640px)"/>
            </video>

            <div className="article__content">
                    <h1 className="article__title" ref={textRef}>Jestem Niezależnym <span className="article__title-important">Front End Developerem</span></h1>
                    <span className="article__text" ref={subTextRef}>Potrzebujesz Developera,Który Spełni Twoje Oczekiwania ? Przychodzę z pomocą !</span>
                    <button className="article__btn" ref={btnRef}>Dowiedz się więcej</button>
            </div>
        
        </article>
     );
}
 
export default MainPicture;