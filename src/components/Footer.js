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
                        <li>Location</li>
                    </ul>
                    <ul className="footer-contact-info-details">
                        <li>
                            <a href="mailto:juin.lee@outlook.com">
                                juin.lee@outlook.com
                            </a>
                        </li>
                        <li>(65) 8934 0061</li>
                        <li>Singapore</li>
                    </ul>
                </div>
                <div className="footer-text">With 💙 by Lee Juin.</div>
            </div>
        </>
    );
}

export default Footer;
