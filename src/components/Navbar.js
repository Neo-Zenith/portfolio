import "../css/Navbar.css";

export default function Navbar() {
    return (
        <>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <span>
                        <a href="#home">&lt;Neo-Zenith /&gt;</a>
                    </span>
                </div>
                <div className="navbar-links">
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
