import React from 'react';
import propTypes from 'prop-types';

import './leaderboard.css';

const Leaderboard = ({ leaderboard }) => (
    <div className="leaderboard">
        <div className="leaderboard-heading heading">Leaderboard</div>
        <div className="leaderboard">
            <table className="leaderboard-table">
                <thead>
                    <tr>
                        <th className="position-heading">#</th>
                        <th className="name-heading">Name</th>
                        <th className="score-heading">Score</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {leaderboard.users.map((user, i) => {
                        if (user.score > 0) {
                            return (
                                <tr key={Math.random() * 1000}>
                                    <td className="position">{i + 1}</td>
                                    <td className="name">{user.username}</td>
                                    <td className="score">
                                        {Math.round(user.score)}
                                    </td>
                                </tr>
                            );
                        }
                        return null;
                    })}
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
