import { useEffect, useState } from "react";
import Title from "../Shared/Title";
import MenuItem from "../Shared/MenuItem";

const PopulerMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch('menu.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        const findPopuler = data.filter((i) => i.category === "popular");
        setMenu(findPopuler);
      });
  }, []);

  console.log(menu);
  return (
    <div>
      <Title title={"---Check it out---"} subtitle={"FROM OUR MENU"}></Title>

      <div className="grid grid-cols-2 gap-5">
        {
            menu.map(i=> <MenuItem key={i._id} item={i}></MenuItem>)
        }
      </div>
    </div>
  );
};

export default PopulerMenu;
