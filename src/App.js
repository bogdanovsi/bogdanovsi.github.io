import React from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom'
import About from './components/About';
import Landing from './components/Landing';

import CenterBox from './components/CenterBox';

import * as Frmw from './frmw/index';

import You from './you/Page';

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route path="/itmo-labs">
          <About></About>
        </Route>
        <Route path="/" exact>
          <Landing></Landing>
        </Route>
        <Route path="/frmw_001">
          <CenterBox>
            <Frmw.Frmw001 />
          </CenterBox>
        </Route>
        <Route path="/you">
          <CenterBox>
            <You />
          </CenterBox>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
