import React from 'react';

import Header from '../Header/Header';
import MainPicture from '../MainPicture/MainPicture';
import Main from '../Main/Main';
import './MainSide.scss';

const MainSide = () => {
    return ( 
        
        <div className="container">

            <Header></Header>
            <MainPicture />
            <Main />
            
        </div>

       );
}
 
export default MainSide;