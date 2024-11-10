import React from "react";
import { Link,  } from "react-router-dom";
function Header (){
    return(
    <>
    <header>
        <div className="container">
            <div className="header">
            <Link to='/' className="logo">Home</Link>
                <Link to='/work'>Works</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/contact'>Exam</Link>
            </div>
        </div>
    </header>
    </>
    )
}
export default Header