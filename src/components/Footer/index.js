import React from "react";
import { Link } from "react-router-dom";
import GitHub from "../../images/greygitty.png"
import LinkedIn from "../../images/greylinked.png"
import Insta from "../../images/greyinsta.png"

function Footer() {
    return (
        <footer>
            <Link
            to="https://github.com/jeffgcameron">
            <img src={GitHub} height="20px" alt="GitHub" className = "social"/>
            
            </Link>
            <Link
            to="https://github.com/jeffgcameron">
            <img src={LinkedIn} height="20px" alt="GitHub" className = "social"/>
            
            </Link>
            <Link
            to="https://github.com/jeffgcameron">
            <img src={Insta} height="20px" alt="GitHub" className = "social"/>
            
            </Link>
        </footer>
)
}

export default Footer;