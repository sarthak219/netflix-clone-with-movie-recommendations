import React, { useState , useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
    const [searchStr, setSearchStr] = useState("");
const [show, handleShow] = useState(false);
const navigate = useNavigate();

// for NavBar transition 

const transitionNavBar = () => {
    if(window.scrollY > 100){
        handleShow(true);
    }
    else{
        handleShow(false)
    }
};

useEffect(() => {
    window.addEventListener("scroll" , transitionNavBar)
    return () => window.removeEventListener('scroll' , transitionNavBar);
}, []);


    return (
    <div className={`nav ${show && 'nav_black'}`}>

        <div className='nav_contents'>
        <img 
        onClick={() => navigate("/")}
        className = "nav_logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt=''
        />

        <img 
        onClick={() => navigate("/profile")}
        className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt=''
        />
        </div>

        <div class="search">
            <input className="input" value={searchStr} type="text" placeholder="Search" onChange={(e)=>{
                setSearchStr(e.target.value)
                props.handleSearch(searchStr)
                }}/>
        </div>

        <div class="Recommendations">
            
        </div>
     </div>
    );
}

export default Nav;