import React from "react";
import "../css/Footer.css";

function Footer() {
    return (
        <>
            <div className="footer-container">
                <hr className="footer-line" />
                <div className="footer-contact">
                    <ul className="footer-contact-info">
                        <li>Email</li>
                        <li>Mobile</li>
                        <li>Resume</li>
                    </ul>
                    <ul className="footer-contact-info-details">
                        <li>
                            <a href="mailto:juin.lee@outlook.com">
                                juin.lee@outlook.com
                            </a>
                        </li>
                        <li>(65) 8934 0061</li>
                        <li>
                            <a href="https://drive.google.com/file/d/1i_M78dXS1W9ISsZPew9NRXezZYtPOjEx/view?usp=share_link">
                                <img src="https://simpleicons.org/icons/googledrive.svg" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-text">With 💙 by Lee Juin.</div>
            </div>
        </>
    );
}

export default Footer;
