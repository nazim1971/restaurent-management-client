
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Title from '../Shared/Title';

const Swip = () => {
    return (
        <div className="my-20">

            <Title 
            title={"---From 11:00am to 10:00pm---"}
              subtitle={"ORDER ONLINE"}>
              
            </Title>

            <div>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide> <img src="https://i.ibb.co/9nwyHs4/watermellon.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide> <img src="https://i.ibb.co/bFRnQPr/vagetable.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide> <img src="https://i.ibb.co/FYfjC90/chocolate.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide> <img src="https://i.ibb.co/SJ5YNRk/food-2.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide> <img src="https://i.ibb.co/Jq9kyyT/food-1.jpg" alt="" /> </SwiperSlide>

      </Swiper>
            </div>
        </div>
    );
};

export default Swip;