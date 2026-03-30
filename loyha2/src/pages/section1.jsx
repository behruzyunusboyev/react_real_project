import sec1img from "../assets/sec1img.jpg"
import "./section1.css"
function Section1(){
    return(
        <div id="section1_div" style={{display:"flex"}}>
            <div className="texts">
            <button className="offer">
                new Arrivals
            </button>
            <h1>Summer collection</h1>
            <h2>2026</h2>
            <p>Discover the latest trends in fashion, electronics,
            and home decor. Shop now and get up to 50% off!</p>
            <div className="sec1_btns">
                <button id="shop_btn">Shop Now</button>
                <button id="view_btn">View Collection</button>
            </div>
            <div className="mal">
                <div className="mal1"><h4>10k+</h4><p>Produkts</p></div>
                <div className="mal2"><h4>50k+</h4><p>Happy Customers</p></div>
                <div className="mal3"><h4>99%</h4><p>Satisfaction</p></div>
            </div>
            </div>
            <div className="imgs1">
                <img src={sec1img} alt="product img" style={{width:"500px", borderRadius:"15px"}} />
            </div>
        </div>
    )
}
export default Section1