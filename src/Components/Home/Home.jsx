import { Helmet } from "react-helmet-async";
import ChefRecomendation from "./ChefRecomendation";
import PopulerMenu from "./PopulerMenu";
import Slider from "./Slider";
import Swiper from "./Swip";
import Testimonial from "./Testimonial";


const Home = () => {
    return (
        <div >
           <div className="mb-20">
           <Helmet>
        <title>Bisto | Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
            <Slider/>
            <Swiper/>
            <PopulerMenu/>
            <ChefRecomendation/>
            <Testimonial/>
           </div>
        </div>
    );
};

export default Home;