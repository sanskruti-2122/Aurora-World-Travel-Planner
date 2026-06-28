import "./MonumentSlider.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import taj from "../../assets/images/monuments/taj.jpg";
import eiffel from "../../assets/images/monuments/eiffel.jpg";
import colosseum from "../../assets/images/monuments/colosseum.jpg";
import pyramids from "../../assets/images/monuments/pyramids.jpg";
import liberty from "../../assets/images/monuments/liberty.jpg";
import machu from "../../assets/images/monuments/machu.jpg";
import petra from "../../assets/images/monuments/petra.jpg";

const monuments = [

    {
        id: 1,
        image: taj,
        name: "Taj Mahal",
        country: "India 🇮🇳"
    },

    {
        id: 2,
        image: eiffel,
        name: "Eiffel Tower",
        country: "France 🇫🇷"
    },

    {
        id: 3,
        image: colosseum,
        name: "Colosseum",
        country: "Italy 🇮🇹"
    },

    {
        id: 4,
        image: pyramids,
        name: "Great Pyramids of Giza",
        country: "Egypt 🇪🇬"
    },

    {
        id: 5,
        image: liberty,
        name: "Statue of Liberty",
        country: "United States 🇺🇸"
    },

    {
        id: 6,
        image: machu,
        name: "Machu Picchu",
        country: "Peru 🇵🇪"
    },

    {
        id: 7,
        image: petra,
        name: "Petra",
        country: "Jordan 🇯🇴"
    }

];

function MonumentSlider() {

    return (

        <section className="monument-section">

            <h2 className="monument-title">

                Famous Destinations Around the World

            </h2>

            <p className="monument-subtitle">

                Explore some of the world's most iconic landmarks and add them to your dream travel list.

            </p>

            <Swiper

                modules={[Navigation, Pagination, Autoplay]}

                navigation

                pagination={{ clickable: true }}

                autoplay={{

                    delay: 3500,

                    disableOnInteraction: false

                }}

                loop={true}

                spaceBetween={30}

                slidesPerView={4}

                breakpoints={{

                    320:{

                        slidesPerView:1

                    },

                    768:{

                        slidesPerView:2

                    },

                    1024:{

                        slidesPerView:3

                    },

                    1400:{

                        slidesPerView:4

                    }

                }}

            >

                {

                    monuments.map((item)=>(

                        <SwiperSlide key={item.id}>

                            <div className="monument-card">

                                <img
                                    src={item.image}
                                    alt={item.name}
                                />
<div className="sparkle sparkle1"></div>
<div className="sparkle sparkle2"></div>
                                <div className="monument-overlay">

                                    <h3>

                                        {item.name}

                                    </h3>
 <span>{item.country}</span>
                                </div>

                            </div>

                        </SwiperSlide>

                    ))

                }

            </Swiper>

        </section>

    );

}

export default MonumentSlider;