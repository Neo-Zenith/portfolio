import React, { useEffect } from "react";
import "../css/Tech.css";

export default function Tech() {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.01,
    };

    function observerCallback(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // fade in observed elements that are in view
                entry.target.classList.replace("fadeOutRight", "fadeInLeft");
            } else {
                // fade out observed elements that are not in view
                entry.target.classList.replace("fadeInLeft", "fadeOutRight");
            }
        });
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            observerCallback,
            observerOptions
        );
        const fadeElms = document.querySelectorAll(".tech-wrapper");
        fadeElms.forEach((el) => observer.observe(el));
    });

    return (
        <>
            <div id="tech" className="tech-container">
                <div className="tech-wrapper fadeInLeft">
                    <div className="tech-header">
                        <span>TECH</span>
                    </div>
                    <div className="tech-title">
                        <span>What I know</span>
                    </div>
                    <div className="tech-content">
                        <div className="tech-cards">
                            <div className="tech-card">
                                <img
                                    alt="Java"
                                    title="Java"
                                    src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png"
                                />
                                <div className="tech-name">
                                    <span>Java</span>
                                </div>
                            </div>
                            <div className="tech-card">
                                <img
                                    alt="C++"
                                    title="C++"
                                    src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png"
                                />
                                <div className="tech-name">
                                    <span>C++</span>
                                </div>
                            </div>
                            <div className="tech-card">
                                <img
                                    alt="Python"
                                    title="Python"
                                    src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
                                />
                                <div className="tech-name">
                                    <span>Python</span>
                                </div>
                            </div>
                            <div className="tech-card">
                                <img
                                    alt="C"
                                    title="C"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfXGGSNGRcWTi2jFFyIXll-Rmq8G5KzY0tDsip1spY&s"
                                />
                                <div className="tech-name">
                                    <span>C</span>
                                </div>
                            </div>
                            <div className="tech-card">
                                <img
                                    alt="JavaScript"
                                    title="JavaScript"
                                    src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                                />
                                <div className="tech-name">
                                    <span>JavaScript</span>
                                </div>
                            </div>
                        </div>
                        <div className="tech-cards">
                            <div className="tech-card">
                                <img
                                    alt="HTML"
                                    title="HTML"
                                    src="https://cdn-icons-png.flaticon.com/512/919/919827.png"
                                />
                                <div className="tech-name">
                                    <span>HTML</span>
                                </div>
                            </div>
                            <div className="tech-card">
                                <img
                                    alt="CSS"
                                    title="CSS"
                                    src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png"
                                />
                                <div className="tech-name">
                                    <span>CSS</span>
                                </div>
                            </div>
                            <div className="tech-card">
                                <img
                                    alt="ReactJS"
                                    title="ReactJS"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                                />
                                <div className="tech-name">
                                    <span>ReactJS</span>
                                </div>
                            </div>
                            <div className="tech-card">
                                <img
                                    alt="Django"
                                    title="Django"
                                    src="https://icons-for-free.com/iconfiles/png/512/django-1324440148290348292.png"
                                />
                                <div className="tech-name">
                                    <span>Django</span>
                                </div>
                            </div>
                            <div className="tech-card">
                                <img
                                    alt="Azure"
                                    title="Azure"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png"
                                />
                                <div className="tech-name">
                                    <span>Azure</span>
                                </div>
                            </div>
                            <div className="tech-card">
                                <img
                                    alt="PostgreSQL"
                                    title="PostgreSQL"
                                    src="https://cdn-icons-png.flaticon.com/512/5968/5968342.png"
                                />
                                <div className="tech-name">
                                    <span>PostgreSQL</span>
                                </div>
                            </div>
                        </div>
                        <div className="tech-cards">
                            <div className="tech-card">
                                <img
                                    alt="Pandas"
                                    title="Pandas"
                                    src="https://pandas.pydata.org/static/img/pandas_mark.svg"
                                />
                                <div className="tech-name">
                                    <span>Pandas</span>
                                </div>
                            </div>
                            <div className="tech-card">
                                <img
                                    alt="Scikit-learn"
                                    title="Scikit-learn"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png"
                                />
                                <div className="tech-name">
                                    <span>Scikit-learn</span>
                                </div>
                            </div>
                            <div className="tech-card">
                                <img
                                    alt="OpenCV"
                                    title="OpenCV"
                                    src="https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg"
                                />
                                <div className="tech-name">
                                    <span>OpenCV</span>
                                </div>
                            </div>
                            <div className="tech-card">
                                <img
                                    alt="Streamlit"
                                    title="Streamlit"
                                    src="https://streamlit.io/images/brand/streamlit-mark-color.svg"
                                />
                                <div className="tech-name">
                                    <span>Streamlit</span>
                                </div>
                            </div>
                        </div>
                        <div className="tech-cards">
                            <div className="tech-card">
                                <img
                                    alt="Git"
                                    title="Git"
                                    src="https://git-scm.com/images/logos/logomark-orange@2x.png"
                                />
                                <div className="tech-name">
                                    <span>Git</span>
                                </div>
                            </div>
                            <div className="tech-card">
                                <img
                                    alt="VSCode"
                                    title="VSCode"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
                                />
                                <div className="tech-name">
                                    <span>VSCode</span>
                                </div>
                            </div>
                            <div className="tech-card">
                                <img
                                    alt="Visual Studio"
                                    title="Visual Studio"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Visual_Studio_Icon_2019.svg/1200px-Visual_Studio_Icon_2019.svg.png"
                                />
                                <div className="tech-name">
                                    <span>Visual Studio</span>
                                </div>
                            </div>
                            <div className="tech-card">
                                <img
                                    alt="Jupyter"
                                    title="Jupyter"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1200px-Jupyter_logo.svg.png"
                                />
                                <div className="tech-name">
                                    <span>Jupyter</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
