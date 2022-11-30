import React, { useEffect } from "react";
import "../css/About.css";

export default function About() {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    };

    function observerCallback(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // fade in observed elements that are in view
                entry.target.classList.replace("fadeOutLeft", "fadeInLeft");
            } else {
                // fade out observed elements that are not in view
                entry.target.classList.replace("fadeInLeft", "fadeOutLeft");
            }
        });
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            observerCallback,
            observerOptions
        );
        const fadeElms = document.querySelectorAll(".about-wrapper");
        fadeElms.forEach((el) => observer.observe(el));
    });

    return (
        <>
            <div id="about" className="about-container">
                <div className="about-wrapper fadeInLeft">
                    <div className="about-header">
                        <span>ABOUT</span>
                    </div>
                    <div className="about-title">
                        <span>Who I am</span>
                    </div>
                    <div className="about-content">
                        <div className="about-text">
                            <span>
                                I am Lee Juin, and I am a sophomore
                                undergraduate in Computer Science @ NTU,
                                Singapore. I am passionate in writing impactful
                                software to solve real-world problems. I have a
                                strong interest in the field of Machine Learning
                                & Artificial Intelligence.
                            </span>
                            <span>
                                I am most experienced working with Python and C,
                                but I am also comfortable and familiar working
                                with Java and C++. I strive to always apply good
                                design principles in all my projects to produce
                                high quality and maintainable codebase.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}