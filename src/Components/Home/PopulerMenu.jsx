
import Title from "../Shared/Title";
import MenuItem from "../Shared/MenuItem";
import useMenu from "../Hooks/useMenu";

const PopulerMenu = () => {
  const [menu] = useMenu()

  const popular = menu.filter((i) => i.category === "popular")


  // console.log(menu);
  return (
    <div>
      <Title title={"---Check it out---"} subtitle={"FROM OUR MENU"}></Title>

      <div className="grid grid-cols-2 gap-5">
        {
            popular.map(i=> <MenuItem key={i._id} item={i}></MenuItem>)
        }
      </div>
    </div>
  );
};

export default PopulerMenu;
