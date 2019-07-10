import React from 'react';
import logo from './logo.png';
import profile from './profile.jpg';
import './Header.css';

function Header() {
    return (
        <div id="header">
            <div className="header-background"></div>
            <div className="header-gardient"></div>
            <div className="header-content">
                <div className="picture-and-logo">
                    <img src={profile} className="profile-picture" alt="profile" />
                    <img src={logo} className="app-logo" alt="logo" />
                </div>
                <span className="vertical-divider" />
                <div className="about-me">
                    <h1>Tali Volf</h1>
                    <h2>Bio:</h2>
                    <p className="bio">
                        Tali, 25, Israel ✌
                    <br />
                        Shooting with my Canon 100D. 📷
                    <br />
                        “Only photograph what you love.” 🖤
                    <br />
                        – Tim Walker</p>
                    <p>
                        <a href="https://www.facebook.com/mytree.xx">Facebook</a> |
                        <a href="https://www.instagram.com/talivolf/"> Instagram</a> |
                        <a href="mailto:tali.vulf@gmail.com"> tali.vulf@gmail.com</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Header;