/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import {
    getQuestions,
    getAllLeaderboards,
    getUserData,
    loginUser,
} from './api/requests';
import { setAuthToken } from './api/api';

import Header from './components/header/header';
import HomePage from './pages/HomePage/HomePage';
import QuestionPage from './pages/QuestionPage/QuestionPage';
import QuestionsPage from './pages/QuestionsPage/QuestionsPage';

import loginGIF from './assets/HomePage/login.gif';

const App = () => {
    const [loggedInUser, setLoggedInUser] = useState(undefined);

    const [questions, setQuestions] = useState([]);
    const [leaderboards, setLeaderboards] = useState([]);
    const [currentRound, setCurrentRound] = useState(1);

    const history = useHistory();

    const logout = () => {
        localStorage.removeItem('token');
        // console.log('Removed token');
        setLoggedInUser(undefined);
    };

    const getPrevAndNextQs = (question) => {
        const index = questions.indexOf(question);
        const { length } = questions;
        if (index === 0) {
            return [undefined, questions[index + 1]];
        }
        if (index === length - 1) {
            return [questions[index - 1], undefined];
        }
        return [questions[index - 1], questions[index + 1]];
    };

    const isLoggedIn = async () => {
        const token = localStorage.getItem('token');
        // console.log('Token inside isLoggedIn: ', token);
        setAuthToken(token);
        if (token) {
            const res = await getUserData();
            // console.log('RES1: ', res);
            if (res.status === 'failure') {
                // console.log('RES2: logout');
                logout();
            } else {
                const { user } = res;
                // console.log('RES2: ', user);
                if (user) {
                    setLoggedInUser(user);
                    setCurrentRound(res.currentRound);
                }
            }
        } else {
            // console.log('Setting loggedin user to undefined');
            setLoggedInUser(undefined);
        }
    };

    const getData = async () => {
        const resL = await getAllLeaderboards();
        const resQ = await getQuestions();
        setQuestions(resQ.questions);
        setLeaderboards(resL.leaderboards);
    };

    const loginFlow = () => {
        isLoggedIn();
        if (loggedInUser) {
            getData();
            console.log(questions);
            setInterval(async () => {
                const res = await getAllLeaderboards();
                setLeaderboards(res.leaderboards);
            }, 20000);
        }
    };

    const renderProtectedRoutes = () => {
        // console.log('LOGGED IN USER: ', loggedInUser);
        if (loggedInUser) {
            if (questions.length === 0) {
                getData();
            }
            // console.log('LOGGEDINUSER: ', loggedInUser);
            if (currentRound > loggedInUser.round) {
                return (
                    <div className="not-eligible">
                        <h1>
                            You are not eligible for round:
                            {' '}
                            {currentRound}
                            {' '}
                            <br />
                            :(
                            <br />
                            <h2>If you think this error should not happen, please contact us on discord. </h2>
                        </h1>
                    </div>
                );
            }
            return (
                <>
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
                                    leaderboards={leaderboards}
                                    user={loggedInUser}
                                />
                            );
                        }}
                    />
                    <Route
                        path="/question/:questionName"
                        render={(props) => {
                            const question = questions.find(
                                (item) => item.questionName
                                    === props.match.params.questionName,
                            );
                            const leaderboard = leaderboards.find(
                                (lbd) => lbd.questionName === question.questionName,
                            );
                            if (!question && !leaderboard) {
                                return <h1>LOADING....</h1>;
                            }
                            return (
                                <QuestionPage
                                    question={question}
                                    leaderboard={leaderboard}
                                    user={loggedInUser}
                                    prevAndNextQs={getPrevAndNextQs(question)}
                                />
                            );
                        }}
                    />
                </>
            );
        }
        return (
            <div className="valid-url">
                <img src={loginGIF} alt="login.gif" className="login-gif" />
                <h2 className="invalid-text">
                    Please login using the unique link that was provided to you
                    in the email. If you did not receive the email, please
                    contact us
                    {' '}
                    <a href="https://discord.gg/xCQs6Fa"><u>here</u></a>
                </h2>
            </div>
        );
    };

    useEffect(() => {
        loginFlow();
    }, []);

    return (
        <div className="App">
            <Header />
            <Switch>
                <Route
                    path="/login/:token"
                    render={(props) => {
                        const { token } = props.match.params;
                        console.log('TOKEN: ', token);
                        const login = async () => {
                            const res = await loginUser(token);
                            console.log('RESSSS:', res);
                            if (res.status === 'success') {
                                console.log(
                                    'LOGIN DONE, setting token',
                                    res.token,
                                );
                                localStorage.setItem('token', res.token);
                                loginFlow();
                                history.push('/');
                            }
                        };
                        login();
                    }}
                />
                {renderProtectedRoutes()}
            </Switch>
        </div>
    );
};

export default App;
