import logo from './logo.svg';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from 'react-global-configuration'
import "./config";

import Navigation from './components/Navigation';
import CreateNotes from './components/CreateNotes';
import CreateUsers from './components/CreateUsers';
import ListarRecursos from './components/ListarRecursos';
import NotesList from './components/NotesList';
import CrearRecursos from './components/CrearRecursos';
import CrearTipos from './components/CrearTipos';

const App = () => {
  return (
    <Router>
      <Navigation/>
      <div className="container p-4">
        <Route path="/" exact component={ListarRecursos} />
        <Route path="/edit/:id" component={CrearRecursos} />
        <Route path="/create" component={CreateNotes} />
        <Route path="/recurso" component={CrearRecursos} />
        <Route path="/user" component={CreateUsers} />
        <Route path="/tipos" component={CrearTipos} />
      </div>
      <ToastContainer/>
    </Router>
  );
}

export default App;
