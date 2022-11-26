import './App.css';
import React from "react";
import Home from './component/Home/Home';
import Review from './component/Review/Review';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inventory from './component/Inventory/Inventory';
import Shops from './component/Shop/Shops';
import NoMatch from './component/NoMatch/NoMatch';
import Login from './component/Login/Login';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/home'>
            <Home/>
          </Route>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/shops'>
            <Shops/>
          </Route>
          <Route exact path='/review'>
            <Review/>
          </Route>
          <Route exact path='/inventory'>
            <Inventory/>
          </Route>
          <Route>
            <Login/>
          </Route>
          <Route>
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
