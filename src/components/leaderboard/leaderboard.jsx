import { React, useEffect } from 'react';
import './leaderboard.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLeaderboard } from '../../redux/leaderboard/leaderboardSlice';

const Leaderboard = () => {
  const dispatch = useDispatch();
  const leaderboards = useSelector((state) => state.leaderboard.leaderboards);
  useEffect(() => {
    dispatch(fetchLeaderboard());
  }, [dispatch]);

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
              <th>Solves</th>
              <th>Length</th>
            </tr>
          </thead>
          <tbody>
            {leaderboards[9].users.map((leaderboard) => (
              <tr>
                <td className="position">1</td>
                <td className="name">{leaderboard.username}</td>
                <td className="score">{leaderboard.score}</td>
                <td>{leaderboard.questionsSolved}</td>
                <td>{leaderboard.sLength}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;

// TODO
// Figure out why this leaderboard shit not happen like it's supposed to
// What's up with the testcase box api call
