

const MenuItem = ({item}) => {
    const {image, name, recipe, price} = item
    return (
        <div className="grid grid-cols-4 gap-2">
            <img className="w-36 rounded-r-3xl  rounded-bl-3xl" src={image} alt="" />
            <div className="col-span-2">
                <h3>{name}------ </h3>
                <p> {recipe} </p>
            </div>
            <p className="text-yellow-400">{price} </p>
        </div>
    );
};

export default MenuItem;