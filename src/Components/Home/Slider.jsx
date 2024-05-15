import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Slider = () => {
    return (
        <div>
             <Carousel >
                <div className="h-[400px]">
                    <img className="h-full" src="https://i.ibb.co/cJXX4rh/ass-3.jpg" />
                </div>
                <div className="h-[400px]">
                    <img className="h-full" src="https://i.ibb.co/CB2ZmgB/da-2.jpg" />
                </div>
                <div className="h-[400px]">
                    <img className="h-full" src="https://i.ibb.co/zbqrVX2/a-8.jpg" />
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;