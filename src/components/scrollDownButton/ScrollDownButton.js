import './ScrollDownButton.css';

export default function ScrollDownButton() {

    const scrollToSection = () => {
        const section = document.getElementById("aboutMe");
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };




    return (
        <div className="scroll-button">
            <button onClick={scrollToSection} className="scroll-button">
                <div className="arrow-container">
                    <div className="arrow"></div>
                    <div className="arrow"></div>
                    <div className="arrow"></div>
                </div>
            </button>
        </div>
    )
}