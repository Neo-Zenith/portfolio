import "../css/Project.css";

import React, { useEffect } from "react";

export default function Project() {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    };

    function observerCallback(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // fade in observed elements that are in view
                entry.target.classList.replace("fadeOutBottom", "fadeInBottom");
            } else {
                // fade out observed elements that are not in view
                entry.target.classList.replace("fadeInBottom", "fadeOutBottom");
            }
        });
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            observerCallback,
            observerOptions
        );
        const fadeElms = document.querySelectorAll(".project-head");
        fadeElms.forEach((el) => observer.observe(el));
    });

    return (
        <>
            <div id="projects" className="project-container">
                <div className="project-wrapper">
                    <div className="project-head fadeInBottom">
                        <div className="project-header">
                            <span>PROJECTS</span>
                        </div>
                        <div className="project-title">
                            <span>What I've built</span>
                        </div>
                    </div>
                    <div className="project-content">
                        <div className="project-cards">
                            <div className="project-card">
                                <div className="project-img">
                                    <img src="https://user-images.githubusercontent.com/77436548/197239208-9991be04-783a-4707-8c72-86ef7744bc38.gif"></img>
                                </div>
                                <div className="project-card-title">
                                    <span>E-Commerce Price Comparison App</span>
                                </div>
                                <div className="project-card-tech">
                                    <div className="project-card-tech-info">
                                        <div className="project-card-tech-stack">
                                            ReactJS
                                        </div>
                                        <div className="project-card-tech-stack">
                                            Django{" "}
                                        </div>
                                        <div className="project-card-tech-stack">
                                            Microsoft Azure
                                        </div>
                                        <div className="project-card-tech-stack">
                                            PotsgreSQL
                                        </div>
                                    </div>
                                </div>
                                <div className="project-card-navigation">
                                    <a
                                        href="https://github.com/Neo-Zenith/Project-FindR"
                                        className="project-card-navigation-link"
                                    >
                                        <i class="fa-solid fa-code"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="project-card">
                                <div className="project-img">
                                    <img src="https://user-images.githubusercontent.com/77436548/210179853-f831aad7-64d0-4e02-977e-291a60755e14.png" />{" "}
                                </div>
                                <div className="project-card-title">
                                    <span>Sentiment Analyzer App</span>
                                </div>

                                <div className="project-card-tech">
                                    <div className="project-card-tech-info">
                                        <div className="project-card-tech-stack">
                                            Python
                                        </div>
                                        <div className="project-card-tech-stack">
                                            Pandas
                                        </div>
                                        <div className="project-card-tech-stack">
                                            Scikit-Learn
                                        </div>
                                        <div className="project-card-tech-stack">
                                            Data Science
                                        </div>
                                    </div>
                                </div>
                                <div className="project-card-navigation">
                                    <a
                                        href="https://github.com/Neo-Zenith/Text-Message-Sentiment-Analyser"
                                        className="project-card-navigation-link"
                                    >
                                        <i class="fa-solid fa-code"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="project-cards">
                            <div className="project-card">
                                <div className="project-img">
                                    <img src="https://user-images.githubusercontent.com/77436548/193458047-a42b20fd-16f5-45e3-8d0c-4aa80e502cd8.gif" />{" "}
                                </div>
                                <div className="project-card-title">
                                    <span>Student Engagement System</span>
                                </div>

                                <div className="project-card-tech">
                                    <div className="project-card-tech-info">
                                        <div className="project-card-tech-stack">
                                            OpenCV
                                        </div>
                                        <div className="project-card-tech-stack">
                                            Django
                                        </div>
                                        <div className="project-card-tech-stack">
                                            Streamlit
                                        </div>
                                        <div className="project-card-tech-stack">
                                            Computer Vision
                                        </div>
                                    </div>
                                </div>
                                <div className="project-card-navigation">
                                    <a
                                        href="https://github.com/Neo-Zenith/Project-ASES"
                                        className="project-card-navigation-link"
                                    >
                                        <i class="fa-solid fa-code"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="project-card">
                                <div className="project-img">
                                    <img src="https://user-images.githubusercontent.com/77436548/200524950-eb502aca-088c-4084-bade-7025f98a70b3.png" />{" "}
                                </div>
                                <div className="project-card-title">
                                    <span>Movie Booking System</span>
                                </div>
                                <div className="project-card-tech">
                                    <div className="project-card-tech-info">
                                        <div className="project-card-tech-stack">
                                            Java
                                        </div>
                                        <div className="project-card-tech-stack">
                                            Object-oriented Programming
                                        </div>
                                    </div>
                                </div>
                                <div className="project-card-navigation">
                                    <a
                                        href="https://github.com/Neo-Zenith/Project-MOBLIMA"
                                        className="project-card-navigation-link"
                                    >
                                        <i class="fa-solid fa-code"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
