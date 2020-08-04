import React from 'react';


import './My_projects.scss';

import shop_app_picture from '../img/shop_app_small.png';
import quiz_app_picture from '../img/quiz-app_small.png';
import shop_bootstrap_picture from '../img/shop-bootstrap_small.png';
import weather_app_picture from '../img/weather-app_small.png';
import creator_app_picture from '../img/cv-creator_small.png';
import chat_app_picture from '../img/chat-app_small.png';
import portfolio_app_picture from '../img/portfolio-app_small.png';
import graphQL_app_picture from '../img/graphQL-app_small.png';

const My_projects = () => {

    const projects = [

        {
            id:0,src:`${portfolio_app_picture}`,title:'Strona portfolio',text:'Strona przedstawiająca informacje o mnie oraz moje umiejętności',
            demo:'Podgląd',code:'GitHub',demo_link:'https://5f0f99903992fc0007203f4c--portfolio-app-132.netlify.app/',demo_code:'https://github.com/krzychuuu132/portfolio-app',technologies:[
                {title:'React.js',icon:''},
                {title:'SASS',icon:''},
                {title:'GSAP',icon:''},
                {title:'BEM',icon:''},
               
            ]
            },
        {
            id:1,src:`${shop_app_picture}`,title:'Aplikacja Sklep',text:'Projekt wirtualnego sklepu internetowego,który napisałem z myślą o wykorzystaniu przy tym wielu technologii webowych.',
            demo:'Podgląd',code:'GitHub',demo_link:'https://shop-app132.herokuapp.com',demo_code:'https://github.com/krzychuuu132/shop-app',technologies:[
                {title:'React',icon:''},
                {title:'React Router',icon:''},
                {title:'React Redux',icon:''},
                {title:'React Thunk',icon:''},
                {title:'GSAP',icon:''},
                {title:'Bootstrap',icon:''},
                {title:'Webpack',icon:''},
                {title:'Express.js',icon:''},
                {title:'MONGO DB',icon:''},
                {title:'SASS',icon:''},
                {title:'BEM',icon:''},
            ]
            },
            {
                id:2,src:`${quiz_app_picture}`,title:'Aplikacja Quiz',text:'Aplikacja,której celem było przećwiczenie czystego języka JavaScript oraz komunikację z API.',
                demo:'Podgląd',code:'GitHub',demo_link:'https://krzychuuu132.github.io/quiz-app/',demo_code:'https://github.com/krzychuuu132/quiz-app',technologies:[
                    {title:'Vanillia.js',icon:''},
                    {title:'SASS',icon:''},
                    {title:'Webpack',icon:''},
                    {title:'API',icon:''},
                    {title:'BEM',icon:''},
                   
                ]
                },
                {
                    id:3,src:`${shop_bootstrap_picture}`,title:'Szablon Sklepu - Bootstrap',text:'Szablon sklepu internetowego,dzięki któremu nauczyłem się używać gotowych komponentów Bootstrapa za pomocą specyficznego nazewictwa klasowego',
                    demo:'Podgląd',code:'GitHub',demo_link:'https://krzychuuu132.github.io/shop-bootstrap/',demo_code:'https://github.com/krzychuuu132/shop-bootstrap',technologies:[
                        {title:'Bootstrap',icon:''},
                        {title:'SASS',icon:''},
                      
                       
                    ]
                    },
                    {
                        id:4,src:`${weather_app_picture}`,title:'Aplikacja pogoda',text:'Aplikacja pogodowa,w której do komunikacji z API użyłem modułu Axios,natomiast do animacji użyłem bilioteki GSAP ',
                        demo:'Podgląd',code:'GitHub',demo_link:'https://krzychuuu132.github.io/weather-app/',demo_code:'https://github.com/krzychuuu132/weather-app',technologies:[
                            {title:'React',icon:''},
                            {title:'Axios',icon:''},
                            {title:'GSAP',icon:''},
                            {title:'SASS',icon:''},
                            {title:'BEM',icon:''},
                           
                        ]
                    },
                    {
                            id:5,src:`${creator_app_picture}`,title:'kreator cv',text:'Aplikacja kreator CV.Jest to bardziej zaawansowana aplikacja napisana w Gatsby.js,która nauczyła mnie bardzo dużo nowych rzeczy np: pisania styli za pomocą Styled components,komunikacji z Headless CMS(w tym przypadku Strapi),tworzenie wydajnych animacji z użyciem biblioteki GSAP oraz wiele wiele innych...',
                            demo:'Podgląd',code:'GitHub',demo_link:'https://strapi-gatsby-postgresql-app.netlify.app/',demo_code:'https://github.com/krzychuuu132/CV-creator',technologies:[
                                {title:'Gatbsy.js',icon:''},
                                {title:'React-router',icon:''},
                                {title:'Redux',icon:''},
                                {title:'Axios',icon:''},
                                {title:'Strapi',icon:''},
                                {title:'Styled-components',icon:''},
                                
                                {title:'PostgreSQL',icon:''},
                                {title:'React PDF',icon:''},
                              
                               
                            ]
                        },
                            {
                                id:6,src:`${chat_app_picture}`,title:'aplikacja chat',text:'Aplikacja chat,której celem było poznanie czegoś nowego ze świata backendu...W tym przypadku Socket.io,który z pomocą Express.js i Reacta jako frontu dał możliwość komunikacji użytkowników online',
                                demo:'Podgląd',code:'GitHub',demo_link:'https://react-express-socket-app.netlify.app/',demo_code:'https://github.com/krzychuuu132/chat-app',technologies:[
                                    {title:'React.js',icon:''},
                                    {title:'React-router',icon:''},
                                    {title:'Express.js',icon:''},
                                    {title:'Socket.io',icon:''},
                                    {title:'GSAP',icon:''},
                                    {title:'BEM',icon:''},
                                  
                                   
                                ]
                            },
                            {
                                id:7,src:`${graphQL_app_picture}`,title:'aplikacja Get Pokemons',text:'Aute labore consectetur laboris magna ad laborum laborum velit aliqua. Culpa minim ex non ut tempor excepteur. Ut ea aliqua ut deserunt enim do officia veniam ut mollit. Sit veniam veniam incididunt nisi in excepteur laborum sint mollit sunt dolore amet.',
                                demo:'Podgląd',code:'GitHub',demo_link:'https://5f29a60741c2a10007e902e3--laughing-borg-a18190.netlify.app/',demo_code:'https://github.com/krzychuuu132/react-graphql-app',technologies:[
                                    {title:'React.js',icon:''},
                                    {title:'React-router',icon:''},
                                    {title:'GraphQL',icon:''},
                                    {title:'GSAP',icon:''},
                                    {title:'BEM',icon:''},
                                  
                                   
                                ]
                            },

    ]
    
    return ( 

        <section className='section projects' data-index='1' data-name='projects'>

            <h3 className='projects__title'>Moje projekty : </h3>

            <div className='projects__wrapper'>

                    {
                        projects.map(project=> (
                            <>

                            <div className='project' key={project.id}>

                                    <div className='project__picture'>
                                        
                                            <img src={project.src} className='project__picture-img' alt='project-picture'/>

                                            <div className='project__technologies'>
                                                        {
                                                            project.technologies.map((technologie,index)=>(
                                                                        <p className='project__technologies-title' key={index}>- {technologie.title} , </p>
                                                            ))
                                                        }
                                            </div>  

                                    </div>

                                    <div className='project__content'>
                                            <h4 className="project__content-title">{project.title}</h4>
                                            <p className='project__content-text'>{project.text}</p>
                                    </div>

                                    <div className='project__sources'>
                              
                                            <a href={project.demo_link} target='blank'  className='project__sources-source'>{project.demo}</a>

                                            <a href={project.demo_code} target='blank' className='project__sources-source'>{project.code}</a>
                             
                            
                                    </div>

                                  
                            </div>

                            

                        </>

                        ))
                    }

                    
            </div>

        </section>

     );
}
 
export default My_projects;