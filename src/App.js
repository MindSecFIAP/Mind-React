import { BrowserRouter, Route, Switch } from 'react-router-dom'

import {Login} from "./pages/Login";
import {RegisterUser} from "./pages/RegisterUser";

import "./App.css";

function App() {
  return (
    <>
 
    <BrowserRouter>
        <Switch>
          <Route path="/registerUser" exact component={RegisterUser} />
          <Route path="/" component={Login} />
        </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
