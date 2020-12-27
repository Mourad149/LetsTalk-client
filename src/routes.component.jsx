import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ChatViewComponent from './chat-view/chat-view.component';
import MeetingPage from './meetings-page/meeting-page.component';
import SignUpPage from './sign-up/sign-up-page.component';
import LayoutComponent from './layout/layout.component';

function RoutesComponent() {
  return (
    <Switch>
      <Route exact path="/meetings" component={MeetingPage} />
      <Route path="/meetings/:id" exact component={ChatViewComponent} />
      <Route exact path="/signUp">
        <LayoutComponent component={<SignUpPage />} />{' '}
      </Route>
    </Switch>
  );
}
export default RoutesComponent;
