import React from "react";

const Footer = () => {
    return (
        <div class="card">
            <div class="card-header bg-dark text-white text-center">
                Copyright &copy; Your Website {new Date().getFullYear()}
            </div>
        </div>    
    );
}
 export default Footer;
