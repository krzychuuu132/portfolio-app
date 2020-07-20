import React,{ useEffect, useRef } from 'react';
import gsap from 'gsap';

import './MainPicture.scss';


const MainPicture = () => {

    const textRef = useRef(null);
    const subTextRef = useRef(null);
    const btnRef = useRef(null);
    const articleRef = useRef(null);

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

    const handleMoreInf = () => {
        const articleHeight = articleRef.current.getBoundingClientRect().height;
      console.log(articleHeight)
      window.scrollTo(0,articleHeight)
    }

    return ( 
        <article className="article" ref={articleRef}>
            

            <div className="article__content">
                    <h1 className="article__title" ref={textRef}>Jestem Kreatywnym <span className="article__title-important">Front End Developerem</span></h1>
                    <span className="article__text" ref={subTextRef}>Potrzebujesz Developera,Który Spełni Twoje Oczekiwania ? Przychodzę z pomocą !</span>
                    <button className="article__btn" ref={btnRef} onClick={handleMoreInf}>Dowiedz się więcej</button>
            </div>
        
        </article>
     );
}
 
export default MainPicture;