import savat from '../assets/savat.jpg'
import yurak from '../assets/yurak.jpg'
import signin from '../assets/sign-in.jpg'
import './navbar.css'
function Navbar(){
    return(
        <div className="nav">
            <h1>SHOPZONE</h1>
            <form action="">
                <input type="text" id='sercher' placeholder='Search...' />
                <button><label htmlFor="sercher">🔍</label></button>
            </form>
            <ul>
                <li><a href="">wishlist</a></li>
                <li><a href="">savat</a></li>
                <li><a href="">login</a></li>
            </ul>
        </div>
    )
}
export default Navbar;