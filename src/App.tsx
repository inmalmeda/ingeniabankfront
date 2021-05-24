import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import './App.css';
import DashBoard from './pods/dashboard/Dashboard.component';

function App() {

  let loggedIn= true

  return (
    <div>
      <Router>
        {/* Switch de rutas */}
          <Switch>
              {/* Ruta a la raíz con redirección a Login si no está logueado */}
              <Route exact path='/'>
                {loggedIn ? 
                  <Redirect from = '/' to = '/dashboard'/>
                  :          
                  <Redirect from = '/' to = '/login'/>
                }
              </Route> 
              {/* Ruta a Login */}
             {/*  <Route exact path='/login' component = {Login}/> */}

              {/* Ruta a dashboard con redirección a login si no está logueado */}
              <Route path='/dashboard'>
                {loggedIn ? 
                    <DashBoard/>
                    :          
                    <Redirect from = '/dashboard' to = '/login'/>
                }
              </Route>      
          </Switch>
      </Router>
    </div>
  );
}

export default App;
