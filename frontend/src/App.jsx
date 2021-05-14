import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//importar conponentes
import Menu from './components/Menu'
import Registrar from './components/Registrar_vivienda'
import consulta from './components/Consulta_vivienda'

function App() {
  return (
    <Router>
      <Menu/>

      <Switch>
        <Route exact path="/" component={Registrar}/>
        <Route exact path="/consulta_viviendas" component={consulta}/>
      </Switch>
    </Router>
  );
}

export default App;