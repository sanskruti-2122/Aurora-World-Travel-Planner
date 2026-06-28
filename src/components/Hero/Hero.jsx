import { useEffect, useState } from "react";
import "./Hero.css";

import { FaSearch, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import hero1 from "../../assets/images/hero1.png";
import hero2 from "../../assets/images/hero2.jfif";
import hero3 from "../../assets/images/hero3.jfif";
import hero4 from "../../assets/images/hero4.jfif";
import hero5 from "../../assets/images/hero5.png";

function Hero() {

    const images = [hero1, hero2, hero3, hero4, hero5];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {

        const slider = setInterval(() => {

            setCurrentImage((prev) => (prev + 1) % images.length);

        }, 5000);

        return () => clearInterval(slider);

    }, [images.length]);

    const nextSlide = () => {

        setCurrentImage((prev) => (prev + 1) % images.length);

    };

    const previousSlide = () => {

        setCurrentImage((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );

    };

    return (

        <section
            className="hero"
            style={{
                backgroundImage: `url(${images[currentImage]})`
            }}
        >

            <div className="overlay">

                <button className="arrow left" onClick={previousSlide}>
                    <FaChevronLeft />
                </button>

                <button className="arrow right" onClick={nextSlide}>
                    <FaChevronRight />
                </button>

                <h1>Explore the World with Aurora World</h1>

                <p>
                    Discover breathtaking destinations, create personalized
                    itineraries, and travel smarter with Aurora World.
                </p>

                <div className="search-box">

                    <FaSearch className="search-icon" />

                    <input
                        type="text"
                        placeholder="Search destination..."
                    />

                    <button>Search</button>

                </div>

                <div className="dots">

                    {images.map((_, index) => (

                        <span
                            key={index}
                            className={
                                currentImage === index
                                    ? "dot active"
                                    : "dot"
                            }
                            onClick={() => setCurrentImage(index)}
                        ></span>

                    ))}

                </div>

            </div>

        </section>

    );
}

export default Hero;