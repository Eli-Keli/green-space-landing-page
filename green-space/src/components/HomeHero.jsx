import "../styles/HomeHero.css"
import hero from "../assets/images/hero2.png"

const HeroSection = () => {
    return (
        <section>
            <div className="hero-container">
                <img src={hero} alt="Hero" />
                <div>
                    <h1>Green Spaces</h1>
                    <p>A community garden for all to enjoy</p>
                    <button className="btn btn-primary">Find an event</button>
                    <button className="btn btn-white">Become a volunteer</button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
