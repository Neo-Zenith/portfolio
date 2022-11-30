import "../css/HeroSection.css";
import TypedReact from "./TypedReact";

export default function HeroSection() {
    return (
        <>
            <div id="home" className="hero-container">
                <div className="hero-pretext">
                    <span>printf("Hello World!\n");</span>
                </div>
                <div className="hero-text">
                    <span className="normal-text">Welcome to My</span>
                    <span className="rotating-text">
                        <TypedReact strings={["Portfolio", "Website", "CV"]} />
                    </span>
                </div>
                <div className="hero-description">
                    <span>
                        I am a sophomore Computer Science undergraduate who is
                        passionate in the field of Machine Learning and
                        Artificial Intelligence. Lets get connected!
                    </span>
                </div>
                <div className="hero-links">
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
        </>
    );
}
