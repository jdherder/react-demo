import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home } from './routes/Home';
import { AntDemo } from './routes/AntDemo';

export { App };

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/ant" component={AntDemo} />
      </div>
    </Router>
  );
};
