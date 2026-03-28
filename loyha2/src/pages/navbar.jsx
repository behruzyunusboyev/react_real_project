import { useState } from 'react';
import { useEffect } from 'react';
import savat from '../assets/savat.jpg'
import yurak from '../assets/yurak.jpg'
import signin from '../assets/sign-in.jpg'
import search from '../assets/search.jpg'
import './navbar.css'
//  DIQQAT ITEMLARGA ID BER VA INPUTGA ULAB SEARCH TIZIMINI ISHGA TUSHUR

function Navbar(){
//     const items = [
//     { id: 1, name: "Olma" },
//     { id: 2, name: "Banan" },
//     { id: 3, name: "Anor" },
//     { id: 4, name: "Uzum" }
//   ];
//     const [search, setSearch] = useState("");

//     const filteredItems = items.filter(item =>
//     item.name.toLowerCase().includes(search.toLowerCase())
// );
    return(
        <div className="nav">
            <h1>SHOPZONE</h1>
            <form action="">
                <img src={search} alt="Search" id='search_img' />
                <input 
                type="text" 
                id='sercher' 
                placeholder='Search products...'
                // value={search}
                // onChange={(e)=>{
                //     setSearch(e.target.value)
                // }}
                 />
            {/* {filteredItems.length === 0 ? (
              <p>Topilmadi</p>
            ) : (
              filteredItems.map(item => (
                <p key={item.id}>{item.name}</p>
              ))
            )} */}
            </form>
            <ul>
                <li class='nav_item'><img src={yurak}  alt="" class='nav_rasm yurak' /><a href="">wishlist</a></li>
                <li class='nav_item'><img src={savat}  alt="" class='nav_rasm savat' /><a href="">savat</a></li>
                <li class='nav_item'><img src={signin} alt="" class='nav_rasm signin' /><a href="">login</a></li>
                <li class='nav_item'><button id='sign_btn'>signup</button></li>
            </ul>
        </div>
    )
}
export default Navbar;