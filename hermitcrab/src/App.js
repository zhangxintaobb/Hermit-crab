import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import AppTab from './container/AppTab'
import CityList from './components/CityList';
import Foundhouse from './container/Foundhouse/Foundhouse';
import Information from './container/Foundhouse/Information';
import Userword from './container/Foundhouse/Userword';
import Importantinfor from './container/Foundhouse/Importantinfor';
import Badword from './container/Foundhouse/Badword';
import Person from './container/myself/Person'
import Collection from './container/myself/Collection';
import Order from './container/myself/Order';
import Record from './container/myself/Record';
import Comment from './container/myself/Comment';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/citylist' component={CityList} />
          <Route path='/myself/person' component={Person} />
          <Route path='/myself/record' component={Record} />
          <Route path='/myself/comment' component={Comment} />
          <Route path='/myself/collection' component={Collection} />
          <Route path='/myself/order' component={Order} />
          <Route path='/study-room-infor' component={Information} />
          <Route path='/userword' component={Userword} />
          <Route path='/importantinfor' component={Importantinfor} />
          <Route path='/badword' component={Badword} />
          <Route path='/' component={AppTab} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
