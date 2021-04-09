/* eslint-disable import/no-named-as-default */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AceEditor from 'react-ace';
import { Dropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';
import Footer from '../../components/footer/footer';
import ModalBox from '../../components/modal/modal';
import TestCaseBox from '../../components/testcase/testcase';
import api from '../../api/api';
import { selectQuestionByName } from '../../redux/question/questionSlice';
import QuestionLeaderboard from '../../components/questionleaderboard/questionLeaderboard';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-ruby';
import 'ace-builds/src-noconflict/mode-rust';
import 'ace-builds/src-noconflict/mode-swift';
import 'ace-builds/src-noconflict/mode-perl';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import './QuestionPage.css';
import HomeButton from '../../assets/QuestionPage/home-button.svg';

const QuestionPage = ({ match }) => {
  const [tempCompilerResponse, setTempCompilerResponse] = useState({});
  const [testCaseBoxStatus, setTestCaseBoxStatus] = useState('hidden');
  const [compilerResponse, setCompilerResponse] = useState({});

  const { questionName } = match.params;

  const question = useSelector((state) => selectQuestionByName(state, questionName));

  const langList = [
    'Bash',
    'Brainfuck',
    'C',
    'Cplusplus',
    'Golfscript',
    'Java',
    'Javascript',
    'O5ABE1',
    'Perl',
    'Python',
    'Ruby',
    'Rust',
    'Swift',
  ];

  const [language, setLanguage] = useState('Select');

  let mode = '';
  if (language === 'C' || language === 'Cplusplus') {
    mode = 'c_cpp';
  } else {
    mode = language;
  }

  const [code, setCode] = useState('');
  const [characters, setCharacter] = useState(0);

  const onChangeFunction = (value) => {
    setCode(value);
    setCharacter(value.length);
  };

  const submitSolution = async () => {
    setTempCompilerResponse({ status: 'compiling', tests: [] });
    const res = await api.post('/submissions', {
      questionName: question.questionName,
      code,
      language,
      submitTime: Date.now(),
    });
    setTempCompilerResponse(res.data.compilerResponse);
  };

  const onSubmit = () => {
    if (code.length === 0) {
      swal('Please enter your code');
    } else {
      submitSolution();
    }

    return null;
  };

  useEffect(() => {
    setCompilerResponse(tempCompilerResponse);
    if (compilerResponse.id) setTestCaseBoxStatus('results');
    else if (compilerResponse.status === 'compiling') setTestCaseBoxStatus('compiling');
    else setTestCaseBoxStatus('hidden');
  }, [tempCompilerResponse, compilerResponse, testCaseBoxStatus]);

  return (
    <div>
      <Link to="/">
        <img src={HomeButton} alt="home-button.svg" className="home-button" />
      </Link>

      <ModalBox />
      <div className="content-area">
        <div className="questions">
          <div className="nav-buttons">
            <div>
              <Link to="/questions" className="next">
                <span>&lt;&lt; Back to Questions</span>
              </Link>
            </div>
          </div>
          <div className="question-heading heading">
            {question.questionName}
          </div>
          <div className="question-details">{question.question}</div>
          <div className="dropdown-div">
            <div>
              Characters:
              {characters}
            </div>
            <div className="language-div">
              <div>Language: &nbsp;</div>
              <div>
                <Dropdown className="dropdown">
                  <Dropdown.Toggle className="dropbtn" id="dropdown-basic">
                    {language}
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-content">
                    {langList.map((lang) => (
                      <Dropdown.Item
                        className="dropdown-item"
                        onClick={(e) => setLanguage(e.target.text)}
                      >
                        {lang}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>

          <AceEditor
            value={code}
            onChange={onChangeFunction}
            mode={mode.toLowerCase()}
            theme="monokai"
            name="coding-space"
            highlightActiveLine
            showGutter
            fontSize={18}
            showPrintMargin={false}
            editorProps={{ $blockScrolling: false }}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: 2,
            }}
          />

          <button type="button" className="submit-button" onClick={onSubmit}>
            Run
          </button>
          <TestCaseBox
            status={testCaseBoxStatus}
            compilerResponse={compilerResponse}
          />
        </div>
        <QuestionLeaderboard match={match} />
      </div>
      <Footer />
    </div>
  );
};

export default QuestionPage;
