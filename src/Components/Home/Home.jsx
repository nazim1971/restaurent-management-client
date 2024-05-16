import PopulerMenu from "./PopulerMenu";
import Slider from "./Slider";
import Swiper from "./Swip";


const Home = () => {
    return (
        <div >
           <div className="mb-20">
            <Slider/>
            <Swiper/>
            <PopulerMenu/>
           </div>
        </div>
    );
};

export default Home;