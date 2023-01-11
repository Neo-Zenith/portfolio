import "../css/Navbar.css";
import React, { useState, useEffect } from "react";

export default function Navbar() {
    const [width, setWidth] = useState(0);
    const [open, setOpen] = useState(false);

    const openMenu = (e) => {
        setOpen(true);
        document.getElementById("navbar-mobile").style.transform =
            "translate(0, 0)";
        document.getElementById("navbar-mobile").style.display = "flex";
        document.getElementById("navbar-non-mobile").style.filter =
            "brightness(0.5)";
        document.getElementById("navbar-menu").style.display = "none";
        document.getElementById("navbar-logo").style.display = "none";
        document.getElementById("home").style.filter = "brightness(0.5)";
        document.getElementById("about").style.filter = "brightness(0.5)";
        document.getElementById("tech").style.filter = "brightness(0.5)";
        document.getElementById("projects").style.filter = "brightness(0.5)";
        document.getElementById("footer").style.filter = "brightness(0.5)";
    };

    const closeMenu = (e) => {
        setOpen(false);
        document.getElementById("navbar-mobile").style.transform =
            "translate(50rem, 0)";
        document.getElementById("navbar-mobile").style.display = "none";
        document.getElementById("navbar-non-mobile").style.filter =
            "brightness(1)";
        document.getElementById("navbar-menu").style.display = "flex";
        document.getElementById("navbar-logo").style.display = "flex";
        document.getElementById("home").style.filter = "brightness(1)";
        document.getElementById("about").style.filter = "brightness(1)";
        document.getElementById("tech").style.filter = "brightness(1)";
        document.getElementById("projects").style.filter = "brightness(1)";
        document.getElementById("footer").style.filter = "brightness(1)";
    };

    useEffect(() => {
        const updateWindowDimensions = () => {
            const newWidth = window.innerWidth;
            setWidth(newWidth);
        };

        window.addEventListener("resize", updateWindowDimensions);
        updateWindowDimensions();
        return () =>
            window.removeEventListener("resize", updateWindowDimensions);
    }, []);

    useEffect(() => {
        if (width >= 768) {
            setOpen(false);
            document.getElementById("navbar-non-mobile").style.filter =
                "brightness(1)";
            document.getElementById("navbar-mobile").style.transform =
                "translate(50rem, 0)";
            document.getElementById("navbar-mobile").style.display = "none";
            document.getElementById("navbar-menu").style.display = "none";
            document.getElementById("navbar-logo").style.display = "flex";
            document.getElementById("home").style.filter = "brightness(1)";
            document.getElementById("about").style.filter = "brightness(1)";
            document.getElementById("tech").style.filter = "brightness(1)";
            document.getElementById("projects").style.filter = "brightness(1)";
            document.getElementById("footer").style.filter = "brightness(1)";
        } else {
            if (!open) {
                document.getElementById("navbar-menu").style.display = "flex";
            }
        }
    }, [width]);

    return (
        <>
            <div className="navbar-container">
                <div id="navbar-non-mobile" className="navbar-non-mobile">
                    <div id="navbar-logo" className="navbar-logo">
                        <span>
                            <a href="#home">&lt;Neo-Zenith /&gt;</a>
                        </span>
                    </div>
                    <div id="navbar-menu" className="navbar-menu">
                        <button
                            onClick={(e) => {
                                openMenu(e);
                            }}
                        >
                            <i class="fa-solid fa-bars"></i>
                        </button>
                    </div>
                    <div id="navbar-links" className="navbar-links">
                        <ul>
                            <li>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#projects">Projects</a>
                            </li>
                            <li>
                                <a href="#tech">Tech</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="navbar-mobile" className="navbar-mobile">
                    <div className="navbar-exit">
                        <button
                            onClick={(e) => {
                                closeMenu(e);
                            }}
                        >
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div className="navbar-logo-mobile">
                        <span>
                            <a href="#home">Lee Juin</a>
                        </span>
                    </div>
                    <div className="navbar-quote">
                        <span>CONSISTENCY MAKES PERFECTION</span>
                    </div>
                    <hr className="navbar-div" />

                    <ul>
                        <li>
                            <a
                                href="#home"
                                onClick={(e) => {
                                    closeMenu(e);
                                }}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                onClick={(e) => {
                                    closeMenu(e);
                                }}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                onClick={(e) => {
                                    closeMenu(e);
                                }}
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#tech"
                                onClick={(e) => {
                                    closeMenu(e);
                                }}
                            >
                                Tech
                            </a>
                        </li>
                    </ul>
                    <hr className="navbar-div" />
                    <div className="navbar-social-mobile">
                        <div className="social-mobile-header">
                            <span>LET'S GET CONNECTED!</span>
                        </div>
                        <ul>
                            <li>
                                <a href="https://github.com/Neo-Zenith">
                                    <img src="https://simpleicons.org/icons/github.svg" />
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com/in/juin-lee">
                                    <img src="https://simpleicons.org/icons/linkedin.svg" />
                                </a>
                            </li>
                            <li>
                                <a href="mailto:juin.lee@outlook.com">
                                    <img src="https://cdn-icons-png.flaticon.com/512/561/561188.png" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="social-links">
                    <ul>
                        <li>
                            <a href="https://github.com/Neo-Zenith">
                                <img src="https://simpleicons.org/icons/github.svg" />
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com/in/juin-lee">
                                <img src="https://simpleicons.org/icons/linkedin.svg" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
