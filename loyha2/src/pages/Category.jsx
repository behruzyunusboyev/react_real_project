import Electronics from '../assets/category_item_1.jpg'
import Fashion from '../assets/category_item_2.jpg'
import Home from '../assets/category_item_3.jpg'
import Sports from '../assets/category_item_4.jpg'
import Beauty from '../assets/category_item_5.jpg'
import Watches from '../assets/category_item_6.jpg'

import './Category.css'
function Category(){
    return(
        <div className="category_div">
            <div className="category_text">
            <h1>Shop by category</h1>
            <p>Browse through your favorite categories. We've got them all!</p>
            </div>
            <div className="category_items">
                <button id='electronics'><a href=""><img src={Electronics} alt="Electronics" /><h3>Electronics</h3><p>2.5k+ items</p></a></button>
                <button id='fashion'><a href=""><img src={Fashion} alt="Fashion" /><h3>Fashion</h3><p>3.1k+ items</p></a></button>
                <button id='home'><a href=""><img src={Home} alt="Home & Living" /><h3>Home & Living</h3><p>1.8k+ items</p></a></button>
                <button id='sports'><a href=""><img src={Sports} alt="Sports" /><h3>Sports</h3><p>1.2k+ items</p></a></button>
                <button id='beauty'><a href=""><img src={Beauty} alt="Beauty" /><h3>Beauty</h3><p>950+ items</p></a></button>
                <button id='watches'><a href=""><img src={Watches} alt="Watches" /><h3>Watches</h3><p>680+ items</p></a></button>
            </div>
        </div>
    )
}
export default Category;