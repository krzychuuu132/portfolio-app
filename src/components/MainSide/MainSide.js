import React from 'react';

import Header from '../Header/Header';
import MainPicture from '../MainPicture/MainPicture';
import './MainSide.scss';

const MainSide = () => {
    return ( 
        
        <div className="container">

            <Header></Header>
            <MainPicture />
          
        </div>

       );
}
 
export default MainSide;