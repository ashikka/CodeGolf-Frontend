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
                        <h3>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </h3>
                        <img src={sponsors} alt="sponsors.png" />
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalBox;
