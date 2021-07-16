import { BrowserRouter, Route, Switch } from 'react-router-dom'

import {Login} from "./pages/Login";
import {Register} from "./pages/Register";

import "./App.css";

function App() {
  return (
    <>
 
    <BrowserRouter>
        <Switch>
          <Route path="/register" exact component={Register} />
          <Route path="/" component={Login} />
        </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
