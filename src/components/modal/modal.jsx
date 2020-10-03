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
