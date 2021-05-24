
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import './App.css';
import DashBoard from './pages/DashBoard';
import Login from './pages/Login';


/* const AppRouting = () => {
  return (
      <div className="App">
      <h1>Ejemplo de rutas y subrutas</h1>
      /* Se define un HashRoute a Home (/) y a admin (/admin
      <Router>
          <Link to="/"> Home </Link>
          <Link to="/admin"> Admin </Link>

          /* Switch para rutas principales 
          <Switch>
          <Route path="/dashboard">
              <Dashboard />
          </Route>
          <Route path="/admin">
              <Administrador />
          </Route>
          <Route path="/">
              <HomePage />
          </Route>
          </Switch>
      </Router>
 </div>*/
 



function App() {

  //FIXME: Pasarlo a SessionStorage
  let loggedIn= true

  return (
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
          <Route exact path='/login' component = {Login}/>

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
  );
}

export default App;
