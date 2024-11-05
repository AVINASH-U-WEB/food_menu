import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Welcome to our culinary haven, where every dish is crafted with passion
        and precision. Our menu is a delightful journey through flavors,
        offering a wide array of options to satisfy every palate. Indulge in our
        chef's specials, featuring seasonal ingredients and innovative recipes.
        Don't forget to save room for dessert, where sweet temptations await.
        With our seamless food delivery service, you can enjoy these delectable
        dishes in the comfort of your home.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div  onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
