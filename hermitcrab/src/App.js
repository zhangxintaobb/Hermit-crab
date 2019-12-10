import React from 'react';
import {HashRouter as Router,Route,Link,Switch} from 'react-router-dom';
import './App.css';
import AppTab from './container/AppTab'
import CityList from './components/CityList';
import Foundhouse from './container/Foundhouse/Foundhouse';
import Information from './container/Foundhouse/Information';
import Userword from './container/Foundhouse/Userword';
import Importantinfor from './container/Foundhouse/Importantinfor';
import Badword from './container/Foundhouse/Badword';
import Location from './container/Foundhouse/Location';
import Form from './container/Foundhouse/Form';
import Prise from './container/Foundhouse/Prise';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          
          <Route path='/citylist' component={CityList} />
          <Route path='/study-room-infor' component={Information} />
          <Route path='/userword' component={Userword} />
          <Route path='/importantinfor' component={Importantinfor} />
          <Route path='/badword' component={Badword} />
          <Route path='/location' component={Location} />
          <Route path='/form' component={Form} />
          <Route path='/prise' component={Prise} />
          <Route path='/' component={AppTab} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
