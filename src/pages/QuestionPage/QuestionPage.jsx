/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AceEditor from 'react-ace';
import { Dropdown } from 'react-bootstrap';
import propTypes from 'prop-types';

import Footer from '../../components/footer/footer';
import Leaderboard from '../../components/leaderboard/leaderboard';
import ModalBox from '../../components/modal/modal';
import TestCaseBox from '../../components/testcase/testcase';
import api from '../../api/api';

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

const QuestionPage = ({ question, leaderboard }) => {
    const langList = [
        'Bash',
        'Brainfuck',
        'C',
        'C++',
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
    if (language === 'C' || language === 'C++') {
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
        const res = await api.post('/submissions', {
            questionName: question.questionName,
            code,
            language,
            submitTime: Date.now(),
        });
        console.log(res);
    };

    return (
        <div>
            <Link to="/">
                <img
                    src={HomeButton}
                    alt="home-button.svg"
                    className="home-button"
                />
            </Link>

            <ModalBox />
            <div className="content-area">
                <div className="questions">
                    <div className="nav-buttons">
                        <div>
                            <a href="https://www.csivit.com" className="prev">
                                <span>&lt;&lt; Prev</span>
                            </a>
                            <a href="https://www.csivit.com" className="next">
                                <span>Next &gt;&gt;</span>
                            </a>
                        </div>
                        <div>
                            <Link to="/" className="next">
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
                                    <Dropdown.Toggle
                                        className="dropbtn"
                                        id="dropdown-basic"
                                    >
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

                    <button type="button" className="submit-button" onClick={submitSolution}>
                        Run
                    </button>
                    <TestCaseBox />
                </div>
                <Leaderboard leaderboard={leaderboard} />
            </div>
            <Footer />
        </div>
    );
};

QuestionPage.propTypes = {
    question: propTypes.shape({
        questionName: propTypes.string.isRequired,
        question: propTypes.string.isRequired,
        points: propTypes.number.isRequired,
    }).isRequired,
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

export default QuestionPage;
