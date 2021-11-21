import React from 'react';
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <div className='App-header'>
                <text className='h1'>Futurex.com INDIA</text>
            </div>
            <div className='second_header'>
                <div>
                    <img className='img' src='https://linking-web.s3.ap-south-1.amazonaws.com/futurex_image.png'></img>
                </div>
                <div className='right_second_header'>
                    <text>Contact us</text>
                    <text className='right_subHeader'>info@indonewsblogs.com</text>
                </div>
            </div>
            <div className='path_header'>
                <div class="dropdown">
                    <Link class="dropbtn" to="/Home">HOME</Link>

                </div>

                <div class="dropdown">
                    <Link class="dropbtn" to="/Home">COMPANY</Link>
                </div>
                <div class="dropdown">
                    <Link class="dropbtn" to="/Services">SERVICES</Link>
                </div>
                <div class="dropdown">
                    <Link class="dropbtn" to="/Home">NEWS</Link>
                </div>
                <div class="dropdown">
                    <Link class="dropbtn" to="/AboutUs">ABOUT US</Link>
                </div>
                <div class="dropdown">
                    <Link class="dropbtn" to="/Wsocial">WSOCIAL</Link>
                </div>
                <div class="dropdown">
                    <Link class="dropbtn" to="/Login">Login</Link>
                </div>
            </div>
        </>
    );
}

export default Header;
