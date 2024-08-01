import "../styles/UpcomingEvents.css"

const UpcomingEvents = () => {
  return (
    <section>
            <div class="upcoming-events-container">
                <h2>Upcoming events</h2>
                <div class="upcoming-event">
                    <div>
                       <p>Free</p> 
                       <h4>Gardening 101</h4>
                       <p>Saturday, May 20th 10:00 AM - 12:00 PM</p>
                       <button class="btn">sign up now</button>
                    </div>
                    {/* <img> */}
                </div>
                <div class="upcoming-event">
                    <div>
                       <p>Free</p> 
                       <h4>Yoga in the park</h4>
                       <p>Saturday, May 20th 10:00 AM - 12:00 PM</p>
                       <button class="btn">sign up now</button>
                    </div>
                    {/* <img> */}
                </div>
                <div class="upcoming-event">
                    <div>
                       <p>Free</p> 
                       <h4>Gardening 101</h4>
                       <p>Saturday, May 20th 10:00 AM - 12:00 PM</p>
                       <button class="btn">sign up now</button>
                    </div>
                    {/* <img> */}
                </div>
                <div class="end"><button class="btn btn-secondary">View all Events</button></div>
            </div>
        </section>
  )
}

export default UpcomingEvents
