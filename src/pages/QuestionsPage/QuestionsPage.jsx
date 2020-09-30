import React from 'react';
import propTypes from 'prop-types';

import Question from '../../components/question/question';
import Footer from '../../components/footer/footer';
import './QuestionsPage.css';
import ModalBox from '../../components/modal/modal';
import Leaderboard from '../../components/leaderboard/leaderboard';

const QuestionsPage = ({ questions }) => (
    <>
        <div>
            <ModalBox />
            <div className="content-area">
                <div className="questions">
                    <div className="question-heading heading">Challenges</div>
                    <div className="questions-ind">
                        {
                            questions.map(
                                (question) => (
                                    <Question
                                        key={Math.random() * 1000}
                                        question={question}
                                    />
                                ),
                            )
                        }
                    </div>
                </div>
                <Leaderboard />
            </div>
            <Footer />
        </div>
    </>
);

QuestionsPage.propTypes = {
    questions: propTypes.arrayOf(propTypes.shape({
        questionName: propTypes.string.isRequired,
        points: propTypes.number.isRequired,
    })).isRequired,
};

export default QuestionsPage;
