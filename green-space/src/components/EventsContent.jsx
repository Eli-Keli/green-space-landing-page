import "../styles/EventsContent.css"
import bird from "../assets/images/bird.png"
import events from "../assets/images/events.png"
import gardening from "../assets/images/gardening.png"

const EventsContent = () => {
  return (
    <section>
            <div class="events-content-container">
                <h2>Upcoming events</h2>
                <div class="event-content">
                    <div class="event-img">
                        <img src={bird} alt="" />
                    </div>
                    <div class="event-description">
                        <h3>Bird watching and plant identification walk</h3>
                        <p>Saturday, February 19, 2023</p>
                        <p>Central Park</p>
                        <button class="btn btn-primary btn-rsvp">RSVP</button>
                    </div>
                    
                </div>
                <div class="event-content">
                    <div class="event-img">
                        <img src={events} alt="" />
                    </div>
                    <div class="event-description">
                        <h3>Community cleanup</h3>
                        <p>Saturday, February 26, 2023</p>
                        <p>Central Park</p>
                        <button class="btn btn-primary btn-rsvp">RSVP</button>
                    </div>
                    
                </div>
                <div class="event-content">
                    <div class="event-img">
                        <img src={gardening} alt="" />
                    </div>
                    <div class="event-description">
                        <h3>Gardening workshop</h3>
                        <p>Saturday, March 4, 2023</p>
                        <p>Central Park</p>
                        <button class="btn btn-primary btn-rsvp">RSVP</button>
                    </div>
                    
                </div>
                <div class="end"><button class="btn btn-secondary">View all Events</button></div>
            </div>
        </section>
  )
}

export default EventsContent
