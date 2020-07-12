import React,{useRef} from 'react';

import './About_me.scss';

import about_me_picture from '../img/about-me_picture.jpg';

const About_me = () => {

    const borderRef = useRef(null);

    const handleChangePosition = (e) =>{
        const x = e.clientX/12;
        const y = e.clientY/16;
        console.log(borderRef.current.style.transform)
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
                <p className="about-me__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim nibh sed metus aliquam egestas.</p>
                <p className="about-me__content-sub_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim nibh sed metus aliquam egestas. Praesent lacus ex, euismod nec odio et, maximus sollicitudin metus. Phasellus non tellus nunc. Praesent a rhoncus orci. Integer porttitor vehicula odio,</p>
            </div>

        </section>

    );
}
 
export default About_me;