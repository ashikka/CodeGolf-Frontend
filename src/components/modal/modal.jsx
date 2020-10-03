/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

import ModalButton from '../../assets/Modal/Modal-Button.svg';
import header from '../../assets/Modal/header.png';
import sponsors from '../../assets/Modal/sponsors.png';
import './modal.css';

const ModalBox = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <img
                src={ModalButton}
                alt="modal-button.svg"
                className="modal-button"
                onClick={handleShow}
            />

            <Modal className="modal" show={show} onHide={handleClose}>
                <Modal.Body className="modal-body">
                    <div className="modal-image">
                        <img src={header} className="header" alt="header.png" />
                    </div>
                    <h1>About</h1>
                    <div className="modal-content">
                        <div>
                            <h3>
                                The Computer Society of India is the largest body of computer professionals in India. To help push technology forward, we organise a wide range of workshops, conferences, events and competitions both technical and non-technical. This year we plan to host a Codegolf event which is a competitive coding event with a twist. CodeGolf challenges you to solve problems in the shortest code possible in the language of your choice.
                            </h3>
                        </div>
                        <h1>Rules</h1>
                        <ol>
                            <li>
                                Shorter code = More points
                            </li>
                            <li>
                                The code length will be calculated using the number of characters.
                            </li>
                            <p>
                                If you have the same score as some the tiebreakers in decreasing order of precedence are:
                            </p>
                            <ul>
                                <li>
                                    Number of questions solved: More the total number of questions solved, the higher your rank on the leaderboard.
                                </li>
                                <li>
                                    Total number of characters of all submissions put together: Lesser the total number of characters, the higher your rank on the leaderboard/
                                </li>
                                <li>
                                    Time latest of submission: Earlier your time of latest submission, the higher your rank on the leaderboard.
                                </li>
                            </ul>
                            <li>
                                Most importantly, have fun!
                            </li>
                            <li>
                                You can be disqualified if found guilty on the grounds of plagiarism.
                            </li>
                        </ol>
                        <div>
                            <img className="sponsor" src={sponsors} alt="sponsors.png" />

                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalBox;
