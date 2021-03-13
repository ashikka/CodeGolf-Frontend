import React from "react";
import { useSelector } from "react-redux";
import { selectLeaderboardbyName } from "../../redux/leaderboard/leaderboardSlice";

import "./questionLeaderboard.css";

const QuestionLeaderboard = ({ match }) => {

  const {questionName} = match.params

  const leaderboard = useSelector((state) => {
    return selectLeaderboardbyName(state, questionName)
  });


  return (
    <div className="leaderboard">
      <div className="leaderboard-heading heading">Leaderboard</div>
      <div className="leaderboard">
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th className="position-heading">#</th>
              <th className="name-heading">Name</th>
              <th className="score-heading">Score</th>
              <th className="score-heading">Solves</th>
              <th className="score-heading">Length</th>

            </tr>
          </thead>
          <tbody>
            {leaderboard.users.map((leader) => (
              <tr>
              <td className="position">1</td>
              <td className="name">{leader.username}</td>
              <td className="score">{leader.score}</td>
              <td className="score">{leader.questionsSolved}</td>
              <td className="score">{leader.sLength}</td>

            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuestionLeaderboard;
