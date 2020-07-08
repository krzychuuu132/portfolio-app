import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.scss';

const Navigation = ({navigationList}) => {

    return (

        <nav className="navigation">

                <ul>

                            {
                                navigationList.map(navigationElement=><li key={navigationElement.id}><Link>{navigationElement.title}</Link></li>)
                            }

                </ul>

        </nav>

    );
}
 
export default Navigation;