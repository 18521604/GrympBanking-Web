import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeView from './View/HomeView';
import InitTransferMoney from './View/InitTransferMoney';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/inittransfermoney">
          <InitTransferMoney />
        </Route>
        <Route path="/">
          <HomeView />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
