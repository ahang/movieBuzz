import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </div>
    </BrowserRouter>
  );
};

export default App;
