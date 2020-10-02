/* eslint-disable react/prop-types */
import React from 'react';

import './testcase.css';

const TestCaseBox = ({ status, compilerResponse }) => {
    const renderTestCaseBox = () => {
        if (status === 'hidden') {
            return null;
        }
        if (status === 'compiling') {
            return (
                <div className="compiling-box">
                    COMPILING...
                </div>
            );
        }
        return (
            <div className="text-case-div">
                {compilerResponse.tests.forEach((test, i) => {
                    if (i === 0) {
                        if (test.remarks === 'Pass') {
                            return (
                                <div>
                                    <div className="test-case-box">
                                        Sample Test Case
                                    </div>
                                    <div className="sample-case-detail">
                                        Expected Output:
                                        <br />
                                        {test.expectedOutput}
                                        <br />
                                        <br />
                                        Obtained Output:
                                        <br />
                                        {test.obtainedOutput}
                                        <br />
                                        <br />
                                        Error:
                                        <br />
                                        {test.error}
                                    </div>
                                </div>
                            );
                        }
                        return (
                            <div className="test-case-box">
                                Sample Test Case
                            </div>
                        );
                    }
                    return (
                        <div className="test-case-box">
                            Test Case
                            {i + 1}
                        </div>
                    );
                })}
            </div>
        );
    };
    return renderTestCaseBox();
};

export default TestCaseBox;
