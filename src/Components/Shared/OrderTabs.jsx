import Cards from "./Cards";


const OrderTabs = ({items}) => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-5">
        {items.slice(0, 6).map((i) => (
         <Cards key={i._id} i={i} />
        ))}
      </div>
        </div>
    );
};

export default OrderTabs;