import React from "react";

class Headerhome extends React.Component {
    render() {
        
      return (
        <div className="headerbg">
            <nav>
                <h1><a className="logo" style={{textDecoration: "none"}} href="#">MyThings</a></h1>
                <ul>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">Login</a></li>
                </ul>
            </nav>

        </div>
        
      );
    }
  }
export default Headerhome;