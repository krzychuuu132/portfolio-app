import React,{useRef} from 'react';

import './About_me.scss';

import about_me_picture from '../img/about-me_picture.jpg';

const About_me = () => {

    const borderRef = useRef(null);

    const handleChangePosition = (e) =>{
        const x = e.clientX/12;
        const y = e.clientY/16;
       
        borderRef.current.style.transform = `translate(-${x}px,-${y}px)`
    }

    return ( 

        <section className="section about-me" data-index="0" data-name="about-me">

            <div className="about-me__picture">
                <div className="about-me__picture-border" ref={borderRef}></div>
                <img src={about_me_picture} alt="author-picture" className="about-me__picture-img" onMouseMove={handleChangePosition}/>
            </div>

            <div className="about-me__content">
                <h3 className="about-me__content-title">O mnie</h3>
                <p className="about-me__content-text">Potrzebujesz dobrze zooptymmalizowanej,responsywnej oraz wydajnej aplikacji ? </p>
                <p className="about-me__content-sub_text">Jestem kreatywnym Developerem.Zajmuję się tworzeniem stron internetowych,aplikacji ,blogów oraz sklepów  w oparciu o nowoczesne technologie,z którymi pracuję na codzień.</p>
            </div>

        </section>

    );
}
 
export default About_me;