import { BrowserRouter, Route, Switch } from 'react-router-dom'

import {Login} from "./pages/Login";
import {RegisterUser} from "./pages/register/RegisterUser";
import { RegisterFormado } from './pages/register/RegisterFormado';
import { RegisterEstagiario } from './pages/register/RegisterEstagiario';

import "./App.css";

function App() {
  return (
    <>
 
    <BrowserRouter>
        <Switch>
          <Route path="/registerUser" exact component={RegisterUser} />
          <Route path="/registerEstagiario" exact component={RegisterEstagiario} />
          <Route path="/registerFormado" exact component={RegisterFormado} />
          <Route path="/" component={Login} />
        </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
