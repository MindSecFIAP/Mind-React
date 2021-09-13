import { BrowserRouter, Route, Switch } from 'react-router-dom'

import {Login} from "./pages/login/Login";
import {RegisterUser} from "./pages/register/RegisterUser";
import { RegisterFormado } from './pages/register/RegisterFormado';
import { RegisterEstagiario } from './pages/register/RegisterEstagiario';
import {Chat} from './pages/chats/Chat'
import {ChatVoluntario} from './pages/chats/ChatVoluntario';

import "./App.css";

function App() {
  return (
    <>
    <BrowserRouter>
        <Switch>
          <Route path="/chatVoluntario" exact component={ChatVoluntario} />
          <Route path="/chatUser" exact component={Chat} />
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
