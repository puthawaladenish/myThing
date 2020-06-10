import React from "react";

class Headerhome extends React.Component {
    render() {
        
      return (
        <div className="headerbg">
            <nav>
                <a className="logo" href="#">MyThings</a>
                <ul className="head">
                    <li><a href="#contact">Help</a></li>
                    <li><a href="#about">Login</a></li>
                </ul>
            </nav>

        </div>
        
      );
    }
  }
export default Headerhome;