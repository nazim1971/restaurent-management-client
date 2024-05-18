

const Cards = ({i}) => {
    return (
        <div>
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img
              src={i.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{i.name} </h2>
            <p>{i.recipe} </p>
            <p>{i.category} </p>
            <p className="text-orange-500" >{i.price} </p>
            <div className=" justify-end">
              <button className="btn btn-outline text-orange-500 hover:bg-red-600 important ">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Cards;