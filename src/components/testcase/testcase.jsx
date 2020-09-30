import React from 'react';

import './testcase.css';

const testcases = [{ id: 'Sample Testcase' }, { id: 'Testcase 1' }, { id: 'Testcase 2' }, { id: 'Testcase 3' }];

const TestCaseBox = () => (
    <div className="testcase-box">
        <table>
            <tbody>
                {testcases.map((testcase) => (
                    <tr>
                        <td>
                            <div className="testcase">
                                {testcase.id}
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div>
            Compiler Message:
            Your Output:
            Expected Output:
        </div>
    </div>

);

export default TestCaseBox;
