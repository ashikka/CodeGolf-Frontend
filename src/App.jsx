import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import api from './api';
import Header from './components/header/header';
import HomePage from './pages/HomePage/HomePage';
import QuestionPage from './pages/QuestionPage/QuestionPage';
import QuestionsPage from './pages/QuestionsPage/QuestionsPage';

const App = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const getQuestions = async () => {
            const res = await api.get('/questions');
            setQuestions(res.data.questions);
        };
        getQuestions();
    }, []);

    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/questions">
                    <QuestionsPage questions={questions} />
                </Route>
                <Route
                    path="/question/:questionName"
                    render={(props) => {
                        const question = questions.filter(
                            (item) => item.questionName
                                === props.match.params.questionName,
                        )[0];
                        if (!question) {
                            return <h1>LOADING....</h1>;
                        }
                        return <QuestionPage question={question} />;
                    }}
                />
            </Switch>
        </div>
    );
};

export default App;
