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
            const resL = await getAllLeaderboards();
            const resQ = await getQuestions();
            setQuestions(resQ.questions);
            setLeaderboards(resL.leaderboards);
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
                <Route
                    path="/questions"
                    render={() => {
                        const leaderboard = leaderboards.find(
                            (lbd) => lbd.questionName === 'Global',
                        );
                        if (!questions || !leaderboard) {
                            return <h1> LOADING...</h1>;
                        }
                        return (
                            <QuestionsPage
                                questions={questions}
                                leaderboard={leaderboard}
                            />
                        );
                    }}
                />
                <Route
                    path="/question/:questionName"
                    render={(props) => {
                        const question = questions.filter(
                            (item) => item.questionName
                                === props.match.params.questionName,
                        )[0];
                        const leaderboard = leaderboards.find(
                            (lbd) => lbd.questionName
                                === question.questionName,
                        );
                        if (!question || !leaderboard) {
                            return <h1>LOADING....</h1>;
                        }
                        return (
                            <QuestionPage
                                question={question}
                                leaderboard={leaderboard}
                            />
                        );
                    }}
                />
            </Switch>
        </div>
    );
};

export default App;
