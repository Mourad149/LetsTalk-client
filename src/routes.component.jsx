import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ChatViewComponent from './chat-view/chat-view.component';
import MeetingPage from './meetings-page/meeting-page.component';

function RoutesComponent() {
  return (
    <Switch>
      <Route exact path="/meetings" component={MeetingPage} />

      <Route path="/meetings/:id" exact component={ChatViewComponent} />
    </Switch>
  );
}
export default RoutesComponent;
