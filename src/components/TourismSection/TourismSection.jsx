import "./TourismSection.css";

import tourismVideo1 from "../../assets/images/videos/tourismVideo1.mp4";
import tourismVideo2 from "../../assets/images/videos/tourismVideo2.mp4";
import charity from "../../assets/images/charity.png";

function TourismSection() {
    return (
        <section className="tourism">

            {/* Main Heading */}
            <div className="section-heading">
                <h1>Discover the Beauty of the World</h1>
                <p>
                    Explore breathtaking destinations, unforgettable adventures,
                    and meaningful travel experiences with Aurora World.
                </p>
            </div>

            {/* Section 1 */}
            <div className="tourism-row">

                <div className="tourism-media">

    <div className="media-frame">

        <video
            autoPlay
            muted
            loop
            playsInline
        >
            <source src={tourismVideo1} type="video/mp4" />
        </video>
<span className="star star1">✦</span>
<span className="star star2">✦</span>
<span className="star star3">✦</span>
    </div>

</div>
                <div className="tourism-content">
                    <h2>Escape to Tropical Paradise</h2>

                    <p>
                        Experience crystal-clear waters, golden beaches, and breathtaking islands from above. Let every destination inspire your next unforgettable journey with Aurora World.
                    </p>
                </div>

            </div>

            {/* Section 2 */}
            <div className="tourism-row">

    <div className="tourism-content">

        <h2>Adventure Beyond the Horizon</h2>

        <p>
           Wander through majestic mountain peaks, peaceful forests, and scenic trails. Every adventure is an opportunity to discover breathtaking landscapes and create memories that last forever.
        </p>

    </div>

    <div className="tourism-media">

        <div className="media-frame">

            <video autoPlay muted loop playsInline>
                <source src={tourismVideo2} type="video/mp4"/>
            </video>
            <span className="star star1">✦</span>
<span className="star star2">✦</span>
<span className="star star3">✦</span>

        </div>

    </div>

</div>

            {/* Charity Heading */}
            <div className="charity-heading">
                <h1>Travel & Charity</h1>
                <p>
                    Make every journey meaningful by supporting people, wildlife,
                    and the environment.
                </p>
            </div>

            {/* Charity Section */}
            <div className="tourism-row charity">

                <div className="tourism-image large">
                    <img src={charity} alt="Charity" />
                     <span className="star star1">✦</span>
<span className="star star2">✦</span>
<span className="star star3">✦</span>

                </div>

                <div className="tourism-content">

                    <h2>Travel With a Purpose</h2>

                    <p>
                        Aurora World believes that travel can make a positive
                        impact. Support local communities, protect wildlife,
                        preserve cultural heritage, and contribute to meaningful
                        charity initiatives while exploring beautiful
                        destinations around the world.
                    </p>

                    <button className="donate-btn">
                        Learn More
                    </button>

                </div>

            </div>

        </section>
    );
}

export default TourismSection;