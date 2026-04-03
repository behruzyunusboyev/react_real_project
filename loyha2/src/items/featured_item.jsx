import { useState } from "react";
import "./featured_item.css"
import img1 from "../assets/featured_item_1.jpg"
import img2 from "../assets/featured_item_2.jpg"
import img3 from "../assets/featured_item_3.jpg"
import img4 from "../assets/featured_item_4.jpg"
import img5 from "../assets/featured_item_5.jpg"
import img6 from "../assets/featured_item_6.jpg"
import img7 from "../assets/featured_item_7.jpg"
import img8 from "../assets/featured_item_8.jpg"
const items = [
{id: 1, name: "Wireless Headphones Pro",  ball:'4.8 ', holat:"Bestseller", revives:"(256 reviews)", narx:"$299.99",  eski_narx:'$399.99',   img:img1},
{id: 2, name: "Premium Running Sneakers", ball:'4.6 ', holat:"New",        revives:"(198 reviews)", narx:"$159.99",  eski_narx:'$199.99',   img:img2},
{id: 3, name: "Ultra Slim Laptop 14",     ball:'4.9 ', holat:"",           revives:"(342 reviews)", narx:"$1299.99", eski_narx:'',          img:img3},
{id: 4, name: "Smart Watch Series 6",     ball:'4.7 ', holat:"Sale",       revives:"(478 reviews)", narx:"$449.99",  eski_narx:'$549.99',   img:img4},
{id: 5, name: "Professional DSLR Camera", ball:'4.9 ', holat:"Bestseller", revives:"(521 reviews)", narx:"$899.99",  eski_narx:'',          img:img5},
{id: 6, name: "Designer Sunglasses",      ball:'4.5 ', holat:"New",        revives:"(167 reviews)", narx:"$189.99",  eski_narx:'$149.99',   img:img6},
{id: 7, name: "Travel Backpack Pro",      ball:'4.6 ', holat:"Sale",       revives:"(293 reviews)", narx:"$129.99",  eski_narx:'$179.99',   img:img7},
{id: 8, name: "Smart Coffee Maker",       ball:'4.8 ', holat:"New",        revives:"(412 reviews)", narx:"$249.99",  eski_narx:'',          img:img8},
];
// narsalarni button orqali savatga qoshish kerak, savatga qoshilganda narxni ham hisoblash kerak, 
// savatga qoshilgan narsalar alohida componentda korsatilishi kerak, 
// savatga qoshilgan narsalarni sonini korsatish kerak
function FeaturedItem() {
  const [featuredItems, setFeaturedItems] = useState(items);
    return (
        <div className="featured-items">
            {featuredItems.map((item) => (
                <div key={item.id} className="featured-item">
                    <img src={item.img} alt={item.name} className="featured-item-image" />
                    <h3 className="featured-item-name">{item.name}</h3>
                    <div className="balls">
                        <p className="featured-item-rating">{item.ball}</p>
                        <p className="featured-item-reviews">{item.revives}</p>
                    </div>
                    <div className="narxlar">
                        <p className="narx">{item.narx}</p>
                        <p className="eski-narx">{item.eski_narx}</p>
                    </div>
                    <button id="add_card">Add to Cart</button>
                </div>
            ))}
        </div>
    );
}
export default FeaturedItem;