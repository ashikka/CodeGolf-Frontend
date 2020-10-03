/* eslint-disable react/prop-types */
import React from 'react';
import propTypes from 'prop-types';

import Question from '../../components/question/question';
import Footer from '../../components/footer/footer';
import './QuestionsPage.css';
import ModalBox from '../../components/modal/modal';
import Leaderboard from '../../components/leaderboard/leaderboard';

const QuestionsPage = ({ questions, leaderboard, user }) => (
    <>
        <div>
            <ModalBox />
            <div className="content-area">
                <div className="questions">
                    <div className="user-name">
                        Welcome,
                        {user.username}
                    </div>
                    <div className="question-heading heading">Challenges</div>
                    <div className="questions-ind">
                        {questions.map((question) => (
                            <Question
                                key={Math.random() * 1000}
                                question={question}
                            />
                        ))}
                    </div>
                </div>
                <Leaderboard leaderboard={leaderboard} />
            </div>
            <Footer />
        </div>
    </>
);

QuestionsPage.propTypes = {
    questions: propTypes.arrayOf(
        propTypes.shape({
            questionName: propTypes.string.isRequired,
            points: propTypes.number.isRequired,
        }),
    ).isRequired,
    leaderboard: propTypes.shape({
        questionName: propTypes.string.isRequired,
        users: propTypes.arrayOf(
            propTypes.shape({
                username: propTypes.string.isRequired,
                score: propTypes.number.isRequired,
                questionsSolved: propTypes.number.isRequired,
                slength: propTypes.number.isRequired,
                latestTime: propTypes.instanceOf(Date).isRequired,
            }),
        ),
    }).isRequired,
};

export default QuestionsPage;
