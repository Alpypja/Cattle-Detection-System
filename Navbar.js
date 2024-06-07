import React from "react";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">Cattle Detection System</div>
            <div className="left">
                <a href="#">Home</a>
                <a href="#">Cattle Owners</a>
                <button>Upload Image</button>
            </div>
        </div>
    );
};

export default Navbar;
