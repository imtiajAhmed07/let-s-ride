import './App.css';
import
  {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Destination from './components/Destination/Destination';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';

 export const UserContext = createContext();

function App(){
  
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/destination/:destinationId">
          <Destination></Destination>
        </PrivateRoute>
        <Route to="/*">
            <NotFound></NotFound>
        </Route> 
      </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
