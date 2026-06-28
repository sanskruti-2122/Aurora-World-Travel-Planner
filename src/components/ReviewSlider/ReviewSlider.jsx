import "./ReviewSlider.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaStar } from "react-icons/fa";

import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";
import user6 from "../../assets/images/users/user6.jpg";
import user7 from "../../assets/images/users/user7.jpg";

const reviews = [

    {
        id: 1,
        image: user1,
        name: "Rahul Sharma",
        review:
            "Aurora World helped us plan an unforgettable vacation. Everything was perfectly organized.",
        rating: 5
    },

    {
        id: 2,
        image: user2,
        name: "Priya Patel",
        review:
            "The itinerary planner saved us so much time. Highly recommended for every traveller.",
        rating: 5
    },

    {
        id: 3,
        image: user3,
        name: "Amit Verma",
        review:
            "Beautiful interface and very easy to use. Loved the budget planning feature.",
        rating: 4
    },

    {
        id: 4,
        image: user4,
        name: "Sneha Joshi",
        review:
            "I discovered amazing destinations through Aurora World. Fantastic experience.",
        rating: 5
    },

    {
        id: 5,
        image: user5,
        name: "Karan Mehta",
        review:
            "Hotel recommendations were excellent and perfectly matched our budget.",
        rating: 5
    },

    {
        id: 6,
        image: user6,
        name: "Neha Kulkarni",
        review:
            "Everything from booking ideas to planning felt simple and enjoyable.",
        rating: 4
    },

    {
        id: 7,
        image: user7,
        name: "Arjun Singh",
        review:
            "One of the best travel planning websites I have ever used.",
        rating: 5
    }

];

function ReviewSlider() {

    return (

        <section className="review-section">

            <h2 className="review-title">

                What Our Travelers Say

            </h2>

            <p className="review-subtitle">

                Hear from people who explored the world with Aurora World.

            </p>

            <Swiper

                modules={[Navigation, Pagination, Autoplay]}

                spaceBetween={30}

                slidesPerView={3}

                navigation

                pagination={{ clickable: true }}

                autoplay={{

                    delay: 3500,

                    disableOnInteraction: false

                }}

                loop={true}

                breakpoints={{

                    320: {

                        slidesPerView: 1

                    },

                    768: {

                        slidesPerView: 2

                    },

                    1024: {

                        slidesPerView: 3

                    }

                }}

            >

                {

                    reviews.map((review) => (

                        <SwiperSlide key={review.id}>

                            <div className="review-card">
 <span className="quote">❝</span>

                                <img

                                    src={review.image}

                                    alt={review.name}

                                    className="review-image"

                                />

                                <h3>

                                    {review.name}

                                </h3>

                                <div className="stars">

                                    {

                                        [...Array(review.rating)].map((_, index) => (

                                            <FaStar key={index} />

                                        ))

                                    }

                                </div>

                                <p>

                                    {review.review}

                                </p>

                            </div>

                        </SwiperSlide>

                    ))

                }

            </Swiper>

        </section>

    );

}

export default ReviewSlider;