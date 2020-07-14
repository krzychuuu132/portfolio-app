import React from 'react';

import './My_abilities.scss';

const My_abilities = () => {

    const abilities = [
        {
            id:0,title:'HTML5/SEO',
        },
        {
            id:1,title:'CSS3',
        },
        {
            id:2,title:'ES6/JavaScript',
        },
        {
            id:3,title:'Responsive Web Design',
        },
        {
            id:4,title:'Webpack',
        },
        {
            id:5,title:'Bootstrap',
        },
        {
            id:6,title:'BEM',
        },
        {
            id:7,title:'GIT',
        },
        {
            id:8,title:'SASS/SCSS',
        },
        {
            id:9,title:'Express.js',
        },
        {
            id:10,title:'MONGO DB',
        },
        {
            id:11,title:'Socket.io',
        },
        {
            id:12,title:'React(React-hooks,React-redux,React-Router)',
        },
        {
            id:13,title:'Wordpress/Woocomerce/Strapi',
        },
        {
            id:14,title:'Gatsby.js',
        },
        {
            id:15,title:'Adobe XD',
        }
    ]
    
    return (  

        <section className="section abilities" data-index="2" data-name="abilities">

                <h3 className='abilities__title'>Umiejętności : </h3>

                <div className='abilities__wrapper'>

                {
                    abilities.map(abilitie=>(

                        <div className='abilitie' key={abilitie.id}>

                                <p className='abilitie__text'>{abilitie.title}</p>

                        </div>
                    ))
                }

                </div>

        </section>

    );
}
 
export default My_abilities;