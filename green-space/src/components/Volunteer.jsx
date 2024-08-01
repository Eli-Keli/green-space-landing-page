import "../styles/Volunteer.css"

const Volunteer = () => {
    return (
        <section>
            <div className="volunteer-container">
                <div>
                    <h1>Volunteer with us</h1>
                    <p>We're excited to have you join our volunteer team! Please fill out the form below and we'll be in touch with more information.</p>
                </div>
                <form action="">
                    <label for="name">Full name</label>
                    <input type="text" name="name" id="full-name" placeholder="Your full name" />

                    <label for="email">Email Address</label>
                    <input type="email" name="email" id="email-address" placeholder="Your email address" />

                    <label for="phone-number">Phone number</label>
                    <input type="number" name="phonenumber" id="phone-number" placeholder="Your phone number" />
                </form>
                <div>
                    <h2>When would you like to volunteer?</h2>
                    <div className="span-div">
                        <button className="btn-date">May 7th</button>
                        <button className="btn-date">June 14th</button>
                        <button className="btn-date">July 9th</button>
                    </div>
                    <button>Choose a date</button>
                </div>
                <div>
                    <h2>What type of volunteer activities are you interested in?</h2>
                    <div className="checkbox-div">
                        <label for="checkbox-1">
                            <input type="checkbox" id="checkbox-1" />
                            <p>Helping with event set up</p>
                        </label>
                        <label for="checkbox-2">
                            <input type="checkbox" id="checkbox-1" />
                            <p>Greeting and checking in attendees</p>
                        </label>
                        <label for="checkbox-3">
                            <input type="checkbox" id="checkbox-1" />
                            <p>Assisting with kids activities</p>
                        </label>
                        <label for="checkbox-4">
                            <input type="checkbox" id="checkbox-1" />
                            <p>Breaking down after the event</p>
                        </label>
                    </div>
                </div>
                <div className="end"><button class="btn btn-primary btn-submit">Submit</button></div>
            </div>
        </section>
    )
}

export default Volunteer
