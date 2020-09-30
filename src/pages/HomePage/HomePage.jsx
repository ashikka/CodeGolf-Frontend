import React from 'react';
import { useHistory } from 'react-router-dom';

import ModalBox from '../../components/modal/modal';
import './HomePage.css';
import codegolf from '../../assets/HomePage/codegolf.gif';

const HomePage = () => {
    const history = useHistory();

    function logKey(e) {
        if (e) {
            history.push('/questions');
        }
        document.removeEventListener('keydown', logKey);
    }
    document.addEventListener('keydown', logKey);

    return (
        <div>
            <ModalBox />
            <div className="home-container">
                <div className="home-title">
                    <img src={codegolf} className="codegolf-gif" alt="codegolf.gif" />
                    <div className="home-button">Press any key to continue</div>
                </div>
            </div>
        </div>

    );
};

export default HomePage;
