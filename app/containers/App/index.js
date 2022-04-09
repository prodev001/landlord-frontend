import React from 'react';
import {
  Route, Redirect, BrowserRouter as Router,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Auth from './Auth';
import Application from './Application';
import ThemeWrapper from './ThemeWrapper';
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;


function App() {
  const user = useSelector(state => state.getIn(['auth', 'currentUser']));

  return (
    <ThemeWrapper>
      <Router>
        <Route path="/">
          {user ? <Route path="/" component={Application} /> : <Redirect to="/login" /> }
        </Route>
        <Route exact path="/login" component={Auth} />
        <Route exact path="/register" component={Auth} />
      </Router>
    </ThemeWrapper>
  );
}

export default App;
