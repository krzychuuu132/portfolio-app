import React from 'react';

import './My_technoliogies.scss';

import html_picture from '../img/html.png';
import sass_picture from '../img/sass.png';
import js_picture from '../img/js.png';
import react_picture from '../img/react.png';
import redux_picture from '../img/redux.png';
import node_picture from '../img/node.png';
import mongodb_picture from '../img/mongodb.png';
import webpack_picture from '../img/webpack.png';
import wordpress_picture from '../img/wordpress.png';

const My_technoliogies = () => {

    const technologies = [
        {
            id:0,src:`${html_picture}`
        },
        {
            id:1,src:`${sass_picture}`
        },
        {
            id:2,src:`${js_picture}`
        },
        {
            id:3,src:`${react_picture}`
        },
        {
            id:4,src:`${redux_picture}`
        },
        {
            id:5,src:`${node_picture}`
        },
        {
            id:6,src:`${mongodb_picture}`
        },
        {
            id:7,src:`${webpack_picture}`
        },
        {
            id:8,src:`${wordpress_picture}`
        },
    ]
    
    return ( 

        <section className="section technologies" data-index="3" data-name="technologies">

                    <h3 className='technologies__title'>Technologie : </h3>

                    <div className='technologies__wrapper'>

                        {
                            technologies.map( technologie => (

                                <div className='technologie' key={technologie.key}>

                                    <img src={technologie.src} alt='technologie-picture' />

                                </div>

                            ))
                        }

                    </div>

        </section>

     );
}
 
export default My_technoliogies;