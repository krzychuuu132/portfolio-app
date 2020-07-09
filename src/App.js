import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import MainSide from './components/MainSide/MainSide';
import Error from "./components/Error/Error";

import './components/styles/style.scss';


const App = () => {
  return (

    <Router>

            <Switch>

                  <Route path='/' component={MainSide} exact/>
                  
                  <Route>
                        <Error />
                  </Route>

            </Switch>

    </Router>

  );
}

export default App;
