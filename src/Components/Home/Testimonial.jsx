import Title from "../Shared/Title";
import ReactStars from "react-rating-stars-component";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const Testimonial = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div>
      <Title title={"---What Our Clients Say---"} subtitle={"TESTIMONIALS"} />
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {review.map((i) => (
            <SwiperSlide className="space-y-4 mb-20" key={i._id}>
              <h1 className="flex justify-center ">
                {" "}
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={50}
                  activeColor="#ffd700"
                />
                ,
              </h1>
              <p className="w-[80%] mx-auto "> {i.details} </p>
              <h1 className="text-xl text-center font-semibold text-orange-600">
                {" "}
                {i.name}{" "}
              </h1>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
