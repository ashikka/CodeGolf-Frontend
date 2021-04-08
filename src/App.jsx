import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from './components/header/header';
import HomePage from './pages/HomePage/HomePage';
import QuestionPage from './pages/QuestionPage/QuestionPage';
import QuestionsPage from './pages/QuestionsPage/QuestionsPage';

const App = () => (
  <div className="App">
    <Header />
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/questions">
          <QuestionsPage />
        </Route>
        <Route path="/question/:questionName" component={QuestionPage} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
