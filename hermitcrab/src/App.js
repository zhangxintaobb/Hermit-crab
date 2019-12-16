import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import AppTab from './container/AppTab'
import CityList from './components/CityList';
import Foundhouse from './container/Foundhouse/Foundhouse';
import Information from './container/Foundhouse/srinfor';
import Userword from './container/Foundhouse/Userword';
import Importantinfor from './container/Foundhouse/importantinfor';
import Badword from './container/Foundhouse/Badword';
import Person from './container/myself/Person'
import Collection from './container/myself/Collection';
import Order from './container/myself/Order';
import Record from './container/myself/Record';
import Comment from './container/myself/Comment';

import Pay from './container/myself/Pay';

import officeinfor from './container/Foundhouse/officeinfor';
import srinfor from './container/Foundhouse/srinfor';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          
          <Route path='/citylist' component={CityList} />
          <Route path='/myself/pay' component={Pay} />
          <Route path='/myself/person' component={Person} />
          <Route path='/myself/record' component={Record} />
          <Route path='/myself/comment' component={Comment} />
          <Route path='/myself/collection' component={Collection} />
          <Route path='/myself/order' component={Order} />
          <Route path='/study-room-infor' component={Information} />
          <Route path='/office-infor' component={officeinfor} />
          <Route path='/study-room-infor' component={srinfor} />
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
