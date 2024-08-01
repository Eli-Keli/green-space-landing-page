import "../styles/UpcomingEvents.css"
import yoga from "../assets/images/yoga.png"
import events from "../assets/images/events.png"
import gardening from "../assets/images/gardening.png"

const UpcomingEvents = () => {
  return (
    <section>
            <div className="upcoming-events-container">
                <h2>Upcoming events</h2>
                <div className="upcoming-event">
                    <div>
                       <p>Free</p> 
                       <h4>Gardening 101</h4>
                       <p>Saturday, May 20th 10:00 AM - 12:00 PM</p>
                       <button className="btn">sign up now</button>
                    </div>
                    <div className="event-img">
                        <img src={gardening} alt="" />
                    </div>
                </div>
                <div className="upcoming-event">
                    <div>
                       <p>Free</p> 
                       <h4>Yoga in the park</h4>
                       <p>Saturday, May 20th 10:00 AM - 12:00 PM</p>
                       <button className="btn">sign up now</button>
                    </div>
                    <div className="event-img">
                        <img src={yoga} alt="" />
                    </div>
                </div>
                <div className="upcoming-event">
                    <div>
                       <p>Free</p> 
                       <h4>Community picnic</h4>
                       <p>Saturday, May 20th 10:00 AM - 12:00 PM</p>
                       <button className="btn">sign up now</button>
                    </div>
                    <div className="event-img">
                        <img src={events} alt="" />
                    </div>
                </div>
                <div className="end"><button className="btn btn-secondary">View all Events</button></div>
            </div>
        </section>
  )
}

export default UpcomingEvents
