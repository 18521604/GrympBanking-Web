import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginView from './View/LoginView';
import InitTransferMoneyView from './View/InitTransferMoneyView';
import ConfirmTransferMoneyView from './View/ConfirmTransferMoneyView';
import ResultTransferMoneyView from './View/ResultTransferMoneyView';
import SignupStepOneView from './View/SignupViews/SignupStepOneView/index';
import SignupStepTwoView from './View/SignupViews/SignupStepTwoView/index';
import SignupStepThreeView from './View/SignupViews/SignupStepThreeView/index';
import SignupStepFourView from './View/SignupViews/SignupStepFourView/index';
import SignupStepFiveView from './View/SignupViews/SignupStepFiveView/index';
import SignupStepSixView from './View/SignupViews/SignupStepSixView/index';
import SignupStepSevenView from './View/SignupViews/SignupStepSevenView/index';
import SignupStepFinishView from './View/SignupViews/SignupStepFinishView/index';


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
        
        {
          /*
          SIGNUP
          */
        }
        <Route exact path="/signup-step-1">
          <SignupStepOneView />
        </Route>
        <Route exact path="/signup-step-2">
          <SignupStepTwoView />
        </Route>
        <Route exact path="/signup-step-3">
          <SignupStepThreeView />
        </Route>
        <Route exact path="/signup-step-4">
          <SignupStepFourView />
        </Route>
        <Route exact path="/signup-step-5">
          <SignupStepFiveView />
        </Route>
        <Route exact path="/signup-step-6">
          <SignupStepSixView />
        </Route>
        <Route exact path="/signup-step-7">
          <SignupStepSevenView />
        </Route>
        <Route exact path="/signup-finish">
          <SignupStepFinishView />
        </Route>
        
        
        <Route path="/">
          <LoginView />
        </Route>


      </Switch>
    </BrowserRouter>
  );
}

export default App;
