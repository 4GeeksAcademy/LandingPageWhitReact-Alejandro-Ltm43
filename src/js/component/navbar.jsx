import React from "react";

const Navbar = () => {
    return (   
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid col-4">
                <a className="navbar-brand" href="#">Start Bootstraps</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>    
                <div className="col-4">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
        </nav>
    );
}
export default Navbar;