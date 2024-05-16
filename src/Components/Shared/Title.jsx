

const Title = ({title, subtitle}) => {
    return (
        <div className="w-1/2 mx-auto text-center my-20">
            <p className="text-orange-400"> {title} </p>
            <h3 className="text-3xl border-y-2"> {subtitle} </h3>
        </div>
    );
};

export default Title;