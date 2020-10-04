/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import propTypes from 'prop-types';
import swal from 'sweetalert';

import codeIcon from '../../assets/Leaderboard/button.svg';

import './leaderboard.css';

const Leaderboard = ({ leaderboard }) => (
    <div className="leaderboard">
        <div className="leaderboard-heading heading">Leaderboard</div>
        <div className="leaderboard">
            <table className="leaderboard-table">
                <thead>
                    <tr>
                        {/* <th className="button-heading"> </th> */}
                        <th className="position-heading">#</th>
                        <th className="name-heading">Name</th>
                        <th className="score-heading">Score</th>
                        {leaderboard.questionName !== 'Global' ? (
                            <th className="score-heading">Characters</th>
                        ) : null}
                    </tr>
                </thead>
                <tbody className="table-body">
                    {leaderboard.users.length > 0 ? (
                        leaderboard.users.map((user, i) => {
                            if (user.score > 0) {
                                return (
                                    <tr key={Math.random() * 1000}>
                                        {user.code ? (
                                            <td>
                                                {leaderboard.questionName
                                                    !== 'Global' ? (
                                                        <a
                                                            onClick={() => swal(user.code)}
                                                        >
                                                            <img
                                                                src={codeIcon}
                                                                alt="O"
                                                                className="code-icon"
                                                            />
                                                        </a>
                                                    ) : ''}
                                                {' '}
                                                {i + 1}
                                            </td>
                                        ) : (
                                            <td>{i + 1}</td>
                                        )}
                                        {/* <td className="position">{i + 1}</td> */}
                                        <td className="name">
                                            {user.username}
                                        </td>
                                        <td className="score">
                                            {Math.round(user.score)}
                                        </td>
                                        {leaderboard.questionName
                                            !== 'Global' ? (
                                                <td className="score-heading">
                                                    {user.sLength}
                                                </td>
                                            ) : null}
                                    </tr>
                                );
                            }
                            return null;
                        })
                    ) : (
                        <tr className="no-solves"><td colSpan="4">No Solves Yet!</td></tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>
);

Leaderboard.propTypes = {
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

export default Leaderboard;
