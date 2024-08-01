import "../styles/EventsHero.css"
import hero from "../assets/images/hero.png"

const EventsHero = () => {
  return (
    <section>
        <div className="events-hero-container">
            <img src={hero} alt="" />
            <div>
                <h1>Join us for our next event</h1>
                <p>The next event is at 10:00 AM on Saturday, February 19th, 2023. Its a 1 mile walk, with a focus on bird watching</p>
            </div>
        </div>
    </section>
  )
}

export default EventsHero
