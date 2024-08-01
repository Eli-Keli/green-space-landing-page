import "../styles/WhatWeOffer.css"
import yoga from "../assets/images/yoga.png"
import events from "../assets/images/events.png"
import recreation from "../assets/images/recreation.png"
import picnic from "../assets/images/picnic.png"

const WhatWeOffer = () => {
    return (
        <section>
            <div class="what-we-offer-container">
                <h2>What we offer</h2>
                <div class="flexbox">
                    <div class="flex">
                        <div class="offer-img">
                            <img src={events} alt="" />
                        </div>
                        <div>
                            <h3>Community Events</h3>
                            <p>Join us for a variety of fun and educational events</p>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="offer-img">
                            <img src={recreation} alt="" />
                        </div>
                        <div>
                            <h3>Recreation</h3>
                            <p>We offer a wide range of recreation opportunities</p>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="offer-img">
                            <img src={picnic} alt="" />
                        </div>
                        <div>
                            <h3>Picnic Areas</h3>
                            <p>Bring your friends and family and enjoy a picnic</p>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="offer-img">
                            <img src={yoga} alt="" />
                        </div>
                        <div>
                            <h3>Yoga classes</h3>
                            <p>Relax and rejuvenate with our outdoor yoga classes</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatWeOffer
