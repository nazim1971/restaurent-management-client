import { Parallax } from 'react-parallax';


const Cover = ({img, text}) => {
    return (
        <div>
             <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
         <div className="hero h-[450px]" >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className=" w-2/3 p-5 bg-slate-800 bg-opacity-40">
      <h1 className="mb-5 text-5xl font-bold"> {text} </h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
  </div>
</div>
    </Parallax>
           
        </div>
    );
};

export default Cover;