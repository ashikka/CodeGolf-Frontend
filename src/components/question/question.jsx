import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import './question.css';

const Question = ({ question, numberOfSolves }) => (
    <div className="question">
        <div className="question-text">
            {question.questionName}
        </div>
        <div className="question-bottom-div">
            <div className="points">
                {question.points}
                {' '}
                pts
            </div>
            <div>
                {numberOfSolves}
                {' '}
                solves
            </div>
            {/* <Link to={`/question/${question.questionName}`}><button type="button" className="solve-button">Solve</button></Link> */}
            <Link to="/questions"><button type="button" className="solve-button">Solve</button></Link>
        </div>
    </div>
);

Question.propTypes = {
    question: propTypes.shape({
        questionName: propTypes.string.isRequired,
        points: propTypes.number.isRequired,
    }).isRequired,
    numberOfSolves: propTypes.number.isRequired,
};

export default Question;
