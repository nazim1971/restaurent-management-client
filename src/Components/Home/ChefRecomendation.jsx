import { useEffect, useState } from "react";
import Title from "../Shared/Title";
import Cards from "../Shared/Cards";

const ChefRecomendation = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const findPopuler = data.filter((i) => i.category === "popular");
        setMenu(findPopuler);
      });
  }, []);
  return (
    <div>
      <Title title={"---Should Try---"} subtitle={"CHEF RECOMMENDS"} />
      <div className="grid grid-cols-3 gap-5">
        {menu.slice(0, 3).map((i) => (
         <Cards key={i._id} i={i} />
        ))}
      </div>
    </div>
  );
};

export default ChefRecomendation;
