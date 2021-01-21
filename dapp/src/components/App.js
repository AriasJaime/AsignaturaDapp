import {DrizzleContext} from "@drizzle/react-plugin";
import '../css/App.css';

import { BrowserRouter as Router, Route, Link} from "react-router-dom";

import Header from './Header';
import Evaluaciones from './Evaluaciones/Evaluaciones';
import Alumnos from './Alumnos/Alumnos';
import Calificaciones from './Calificaciones';
import MisCosas from './MisCosas';

const Navegacion = () => (
  <nav>
    <ul>
      <li><Link to ="/">Home</Link></li>
      <li><Link to ="/evaluaciones">Evaluaciones</Link></li>
      <li><Link to ="/alumnos">Alumnos</Link></li>
      <li><Link to ="/calificaciones">Calificaciones</Link></li>
      <li><Link to ="/miscosas">Mis Cosas</Link></li>
    </ul>
  </nav>
)

function App() {
  return (
    <DrizzleContext.Consumer>
        {drizzleContext => {
          const{drizzle,drizzleState,initialized} = drizzleContext;
          if(!initialized){
            return (<main><h1>Cargando Dapp...</h1></main>);
          }
          return (
            <div className="App">
              <Router>
                <Header           drizzle={drizzle} drizzleState={drizzleState}/>
                <Navegacion/>
                <Route path="/" exact>
                  <p>Bienvenidos a la práctica 3 de BCDA.</p>
                </Route>
                <Route path="/evaluaciones" exact>
                <Evaluaciones     drizzle={drizzle} drizzleState={drizzleState}/>
                </Route>
                <Route path="/alumnos" exact>
                <Alumnos          drizzle={drizzle} drizzleState={drizzleState}/>
                </Route>
                <Route path="/calificaciones" exact>
                <Calificaciones   drizzle={drizzle} drizzleState={drizzleState}/>
                </Route>
                <Route path="/miscosas" exact>
                <MisCosas         drizzle={drizzle} drizzleState={drizzleState}/>
                </Route>
              </Router>
            </div>
          );

        }}
    
    </DrizzleContext.Consumer>
  );
}

export default App;
