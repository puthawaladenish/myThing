//import React from "react";

const Navindex = () => {
    
    return (
        <div>
            <nav className="navbar navbar-expand-md headerbg" >
                <a className="navbar-brand logo pl-5" href="#">myThings</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon">
                        <div className="menubar" onClick="myFunction(this)">
                            <div class="bar1"></div>
                            <div class="bar2"></div>
                            <div class="bar3"></div>
                        </div>
                    </span>
                </button>
                <div className="collapse navbar-collapse pr-4 justify-content-end" id="collapsibleNavbar">
                    <ul className="navbar-nav active menufont">
                        <li className="nav-item nav-tabs menufont">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">ContactUs</a>
                        </li>
                    </ul>
                </div>
            </nav>
            
        </div>


    );
};

//export default Navindex;