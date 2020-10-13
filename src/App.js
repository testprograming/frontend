import React from 'react';
import './App.css';
import NavBar from "./components/Navbar";
import { Provider } from 'react-redux';
import { BrowserRouter as Router,  Route } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';
import AddUser from './components/FormAddUser';
import EditUser from './components/FormEditUser';
import ListUser from './components/ListUserComponents';

function App() {
  return (
      <div>
          <Provider store={createStore(reducers, applyMiddleware(thunk))}>
              <Router>
              {/* <Switch> */}
          <Route exact path="/">
            <NavBar/>
            <ListUser/>
          </Route>
          <Route exact path="/AddUser">
          <NavBar/>
            <AddUser/>
          </Route>
          <Route exact path="/EditUser/:id">
          <NavBar/>
            <EditUser/>
          </Route>
          {/* </Switch> */}
              </Router>
          </Provider>
      </div>
  );
}

export default App;
