import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp'
import Navigation from './Components/Navigation/Navigation';
import Destination from './Components/Destination/Destination';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'

export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Navigation></Navigation>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/signup">
          <SignUp></SignUp>
        </Route>
        <PrivateRoute path="/destination/:vehicleName">
          <Destination></Destination>
        </PrivateRoute>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
