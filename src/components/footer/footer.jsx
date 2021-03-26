import React from 'react';
import codegolf from '../../assets/footer/codegolf.png';
import instagram from '../../assets/footer/instagram.png';
import facebook from '../../assets/footer/facebook.png';
import twitter from '../../assets/footer/twitter.png';
import discord from '../../assets/footer/discord.png';
import madeByCSI from '../../assets/footer/madewithbycsi.png';

import './footer.css';

const Footer = () => (
    <div className="bottom-footer">

        <div className="footer">
            <div className="main-logos">
                <a href="https://codegolf.csivit.com">
                    <img
                        src={codegolf}
                        alt="CODEGOLF"
                        className="codegolf-logo"
                    />
                </a>
            </div>
            <div className="mt-1 mb-1">
                <h2>Codegolf</h2>
            </div>
            <div className="social-logos">
                <a href="https://www.instagram.com/csivitu/">
                    <img
                        src={instagram}
                        alt="INSTAGRAM"
                        className="social-logo instagram-logo"
                    />
                </a>
                <a href="https://www.facebook.com/csivitu/">
                    <img
                        src={facebook}
                        alt="FACEBOOK"
                        className="social-logo facebook-logo"
                    />
                </a>
                <a href="https://twitter.com/csivitu">
                    <img
                        src={twitter}
                        alt="TWITTER"
                        className="social-logo twitter-logo"
                    />
                </a>
                <a href="https://discord.gg/xCQs6Fa">
                    <img
                        src={discord}
                        alt="DISCORD"
                        className="social-logo discord-logo"
                    />
                </a>
            </div>
            <div className="made-by-csivit">
                <img src={madeByCSI} alt="Made with <3 by csivit" />
            </div>
        </div>
    </div>
);

export default Footer;
