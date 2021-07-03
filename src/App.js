import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginView from './View/LoginView';
import InitTransferMoneyView from './View/InitTransferMoneyView';
import ConfirmTransferMoneyView from './View/ConfirmTransferMoneyView';
import ResultTransferMoneyView from './View/ResultTransferMoneyView';

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
        <Route exact path="/resulttransfermoney">
          <ResultTransferMoneyView />
        </Route>
        <Route path="/">
          <LoginView />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
