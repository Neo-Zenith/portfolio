import React, { useEffect } from "react";
import "../css/Tech.css";

export default function Tech() {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
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
                                <div className="tech-card-title">Languages</div>
                                <div className="tech-card-info-text">
                                    C, Python, Java, C++
                                </div>
                                <div className="tech-card-info">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png" />
                                    <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" />
                                    <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" />
                                    <img src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png" />
                                </div>
                            </div>

                            <div className="tech-card">
                                <div className="tech-card-title">
                                    Web Development
                                </div>
                                <div className="tech-card-info-text">
                                    React, dJango, HTML, CSS, JS
                                </div>
                                <div className="tech-card-info">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB5wbb8iR5cNWmGeAyIw3oKeMVEpdWWG4_VXzPnJaIwQ&s" />
                                    <img src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" />
                                    <img src="https://www.computerhope.com/jargon/j/javascript.png" />
                                </div>
                            </div>
                        </div>
                        <div className="tech-cards">
                            <div className="tech-card">
                                <div className="tech-card-title">
                                    Cloud & Databases
                                </div>
                                <div className="tech-card-info-text">
                                    Azure, PostgreSQL
                                </div>
                                <div className="tech-card-info">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" />
                                </div>
                            </div>
                            <div className="tech-card">
                                <div className="tech-card-title">
                                    Data Science
                                </div>
                                <div className="tech-card-info-text">
                                    Pandas, Scikit-learn, TF, OpenCV, Streamlit
                                </div>
                                <div className="tech-card-info">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAAEDCAMAAABQ/CumAAAAeFBMVEX///8TB1QAAEb/ygDnBIgPAFLNzNYTAFnQ0NgMAFcAAETb2eP39/oUBlfV1N7/xwDmAID/9tfLydcjG17/4Yz//vbCwM3ykcL61OfoBIwyKmgAADYAAE0AAErx8PTIxdT/+un/34T85/Lyir/lAHv50eX+9fkpH2Ma8J+4AAACEklEQVR4nO3dzVIaQRSAUYNCEIGoiYmJivnP+79hFrmLVHELZ6pnmG483xqaPruh5lb32ZkkSZIkSZIkvb52z7dZU2+rT4uH2X6rx6m31afF7M1+87dTb6tPCDWEUEMINYRQQ5MS1tu0nqtMSrhKn26e1v1WmZawyn58g4DQL4QIoSyECKEshAihLIQIoSyECKEshAihLIQIoSyECKEshAihLIQIoSyECOFA6cvM5a4nYb29yjoO4WmVvM58WPQkbF8e+RqPcDlPVp4t+xLS/W0QEBCqI8yTLpsizN8n/WmJ0CEEBAQEBAQEBIT2CF+/fci6a4hw8y7rvC3CeRYCAgICAgICAgICAgICwlCEtJYIdzdp/3+kdkKHToFQ+RjJMCEcCKF7CAdC6B7CgRC6Nylh9zGtJUJ6uNCsnsOFhhkvPAHC9x+fsloi/Pp5nXTREuH++iLpMwICAgICAgICAgICAgKC/87R7/u0lggdQkBAQEBAQEB4dYQON67UTqh9KuwkDlRBQED4R8gOF5o3Rdh8yepLGO0ez6MNPO+WQ9w3NilhvBAihLIQIoSyECKEshAihLIQIoSyECKEshAihLIQIoSyECKEshAihLIQIoSyEKJt+lL0SNeADUR4TG9cGWXHew10AkPP4aRBO9ohEuOFUEMINYRQQwg1dAKEDvd41t5t2u7lL0qSJEmSJEnSyfUXeomSFq0EzbkAAAAASUVORK5CYII=" />
                                    <img src="https://avatars.githubusercontent.com/u/17349883?s=280&v=4" />
                                    <img src="https://avatars.githubusercontent.com/u/15658638?s=280&v=4" />
                                    <img src="https://editor.analyticsvidhya.com/uploads/232202.png" />
                                    <img src="https://res.cloudinary.com/dyd911kmh/image/upload/v1640050215/image27_frqkzv.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
