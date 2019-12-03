import React from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import './App.css';
import AppTab from './container/AppTab'
import CityList from './components/CityList';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' component={AppTab} exact/>
          <Route path='/citylist' component={CityList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
