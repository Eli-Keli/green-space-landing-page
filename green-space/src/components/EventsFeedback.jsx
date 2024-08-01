import "../styles/EventsFeedback.css"

const EventsFeedback = () => {
  return (
    <section>
      <div className="events-feeback-container">
        <h2>Feedback</h2>
        <p>We are looking for ways to improve our events. Is there something we could do better? let us know</p>
        <form action="">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Your email address" />

          <textarea name="feedback" id="feedback" placeholder="Enter your feedback here" />

        </form>
        <div className="end"><button className="btn btn-primary btn-submit">Submit</button></div>
      </div>
    </section>
  )
}

export default EventsFeedback
