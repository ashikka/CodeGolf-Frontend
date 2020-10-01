import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { getQuestions, getAllLeaderboards } from './api/requests';

import Header from './components/header/header';
import HomePage from './pages/HomePage/HomePage';
import QuestionPage from './pages/QuestionPage/QuestionPage';
import QuestionsPage from './pages/QuestionsPage/QuestionsPage';

const App = () => {
    const [questions, setQuestions] = useState([]);
    const [leaderboards, setLeaderboards] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await Promise.all([getQuestions, getAllLeaderboards]);
            setQuestions(res[0].questions);
            setLeaderboards(res[1].leaderboards);
        };
        getData();
        setInterval(async () => {
            const res = await getAllLeaderboards();
            setLeaderboards(res.leaderboards);
        }, 20000);
    }, []);

    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/questions">
                    <QuestionsPage
                        questions={questions}
                        leaderboard={leaderboards.find(
                            (leaderboard) => leaderboard.questionName === 'Global',
                        )}
                    />
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
                        return (
                            <QuestionPage
                                question={question}
                                leaderboard={leaderboards.find(
                                    (leaderboard) => leaderboard.questionName
                                        === question.questionName,
                                )}
                            />
                        );
                    }}
                />
            </Switch>
        </div>
    );
};

export default App;
