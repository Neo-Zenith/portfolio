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
                                <div className="project-card-image">
                                    <img src="https://user-images.githubusercontent.com/77436548/197239208-9991be04-783a-4707-8c72-86ef7744bc38.gif" />
                                </div>
                                <div className="project-card-title">
                                    E-Commerce Price Comparison App
                                </div>
                                <hr className="project-card-header-line" />
                                <div className="project-card-description">
                                    <span>
                                        A full-stack web application that
                                        provides a unified channel for online
                                        shoppers to shop for products with just
                                        a single search.
                                    </span>
                                </div>
                                <hr className="project-card-footer-line" />
                                <div className="project-card-tech">
                                    <div className="project-card-tech-header">
                                        Tech Used
                                    </div>
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
                                    </div>
                                </div>
                                <div className="project-card-navigation">
                                    <a
                                        href="https://github.com/Neo-Zenith/Project-FindR"
                                        className="project-card-navigation-link"
                                    >
                                        Source
                                    </a>
                                </div>
                            </div>
                            <div className="project-card">
                                <div className="project-card-image">
                                    <img src="https://monkeylearn.com/static/6b2ad32d58b2ceece93e816b52b20d05/An_Introduction_to_NLP_in_AI-Thumbnail.png" />
                                </div>
                                <div className="project-card-title">
                                    Sentiment Analyzer App
                                </div>
                                <hr className="project-card-header-line" />
                                <div className="project-card-description">
                                    <span>
                                        This emotion classification project
                                        leverages on Logistic Regression, Naive
                                        Bayes and LSVM to build a predcitive
                                        model with accuracy of 88%.
                                    </span>
                                </div>
                                <hr className="project-card-footer-line" />
                                <div className="project-card-tech">
                                    <div className="project-card-tech-header">
                                        Tech Used
                                    </div>
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
                                    </div>
                                </div>
                                <div className="project-card-navigation">
                                    <a
                                        href="https://github.com/Neo-Zenith/Text-Message-Sentiment-Analyser"
                                        className="project-card-navigation-link"
                                    >
                                        Source
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="project-cards">
                            <div className="project-card">
                                <div className="project-card-image">
                                    <img src="https://user-images.githubusercontent.com/77436548/193458047-a42b20fd-16f5-45e3-8d0c-4aa80e502cd8.gif" />
                                </div>
                                <div className="project-card-title">
                                    Student Engagement System
                                </div>
                                <hr className="project-card-header-line" />
                                <div className="project-card-description">
                                    <span>
                                        An application that can detect
                                        engagement level of students based on
                                        eye aspect ratio (EAR) using OpenCV for
                                        the eye detection model.
                                    </span>
                                </div>
                                <hr className="project-card-footer-line" />
                                <div className="project-card-tech">
                                    <div className="project-card-tech-header">
                                        Tech Used
                                    </div>
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
                                    </div>
                                </div>
                                <div className="project-card-navigation">
                                    <a
                                        href="https://github.com/Neo-Zenith/Project-ASES"
                                        className="project-card-navigation-link"
                                    >
                                        Source
                                    </a>
                                </div>
                            </div>
                            <div className="project-card">
                                <div className="project-card-image">
                                    <img src="https://www.cmarix.com/blog/wp-content/uploads/2020/03/Everything-About-Online-Movie-Ticket-Booking-App-and-Website-Development-02.png" />
                                </div>
                                <div className="project-card-title">
                                    Movie Booking System
                                </div>
                                <hr className="project-card-header-line" />
                                <div className="project-card-description">
                                    <span>
                                        A centralized movie booking and listing
                                        system which allows vendor to list
                                        movies and movie enthusiasts to book
                                        movies.
                                    </span>
                                </div>
                                <hr className="project-card-footer-line" />
                                <div className="project-card-tech">
                                    <div className="project-card-tech-header">
                                        Tech Used
                                    </div>
                                    <div className="project-card-tech-info">
                                        <div className="project-card-tech-stack">
                                            Java
                                        </div>
                                        <div className="project-card-tech-stack">
                                            Visual Paradigm
                                        </div>
                                    </div>
                                </div>
                                <div className="project-card-navigation">
                                    <a
                                        href="https://github.com/Neo-Zenith/Project-MOBLIMA"
                                        className="project-card-navigation-link"
                                    >
                                        Source
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
