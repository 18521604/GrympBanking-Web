import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeView from './View/HomeView';
import InitTransferMoneyView from './View/InitTransferMoneyView';
import ConfirmTransferMoneyView from './View/ConfirmTransferMoneyView';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/inittransfermoney">
          <InitTransferMoneyView />
        </Route>
        <Route exact path="/confirmtransfermoney">
          <ConfirmTransferMoneyView />
        </Route>
        <Route path="/">
          <HomeView />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
