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
                                            PostgreSQL
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
                                    <img src="https://user-images.githubusercontent.com/77436548/211150907-47f4ec3c-a436-44e5-bc80-c15075ef24cc.png" />{" "}
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
                                    <img src="https://user-images.githubusercontent.com/77436548/211150806-ca8a1100-db49-480c-b473-3895b9d080da.png" />{" "}
                                </div>
                                <div className="project-card-title">
                                    <span>
                                        Automated Student Engagement System
                                    </span>
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
                                    <img src="https://user-images.githubusercontent.com/77436548/211150763-e6a33ec7-a422-4ed6-a750-e72c96049814.png" />{" "}
                                </div>
                                <div className="project-card-title">
                                    <span>Luggage Status Web App</span>
                                </div>
                                <div className="project-card-tech">
                                    <div className="project-card-tech-info">
                                        <div className="project-card-tech-stack">
                                            Arduino
                                        </div>
                                        <div className="project-card-tech-stack">
                                            ReactJS
                                        </div>
                                        <div className="project-card-tech-stack">
                                            Django
                                        </div>
                                        <div className="project-card-tech-stack">
                                            Microsoft Azure
                                        </div>
                                        <div className="project-card-tech-stack">
                                            IoT
                                        </div>
                                    </div>
                                </div>
                                <div className="project-card-navigation">
                                    <a
                                        href="https://github.com/Neo-Zenith/escendo-ReadyBex"
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
