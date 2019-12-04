import React from 'react';
import {HashRouter as Router,Route,Link,Switch} from 'react-router-dom';
import './App.css';
import AppTab from './container/AppTab'
import CityList from './components/CityList';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route  path='/citylist' component={CityList} />
          <Route path='/' component={AppTab} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
