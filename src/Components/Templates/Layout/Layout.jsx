import React from "react";
import HeaderTop from "../../Pages/HeaderTop/HeaderTop";
import ProductSection from "../../Pages/ProductSection/ProductSection";
import banner from "../../../assets/banner.jpg";

const Layout = ()=> {
    const card = [{img: banner,title:"Crab Pool Security",amt:12},{img:banner,title:"2Crab Pool Security",amt:122},{img:banner,title:"3Crab Pool Security",amt:142}];
    const newcard = [{img: banner,title:"newCrab Pool Security",amt:12},{img:banner,title:"new2Crab Pool Security",amt:122},{img:banner,title:"new3Crab Pool Security",amt:142}];

    return(
        <div>
            <HeaderTop/>
            <ProductSection card = {card}/>
            <ProductSection title = "upcoming products" card = {newcard}/>
        </div>
    )
}
export default Layout;