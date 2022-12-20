import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Project from "./components/Project";
import Tech from "./components/Tech";
import Footer from "./components/Footer";
import Scrollback from "./components/Scrollback";

export default function App() {
    return (
        <>
            <Navbar />
            <Scrollback />
            <HeroSection />
            <About />
            <Project />
            <Tech />
            <Footer />
        </>
    );
}
