import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Question from '../../components/question/question';
import Footer from '../../components/footer/footer';
import './QuestionsPage.css';
import { fetchQuestions } from '../../redux/question/questionSlice';
import ModalBox from '../../components/modal/modal';
import Leaderboard from '../../components/leaderboard/leaderboard';

const QuestionsPage = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.question.questions);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);
  return (
    <>
      <div>
        <ModalBox />
        <div className="content-area">
          <div className="questions">
            <div className="question-heading heading">Challenges</div>
            <div className="questions-ind">
              {questions.map((question) => (
                <Question key={Math.random() * 1000} question={question} />
              ))}
            </div>
          </div>
          <Leaderboard />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default QuestionsPage;
