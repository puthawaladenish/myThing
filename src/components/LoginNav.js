import React from "react";

class Loginnav extends React.Component {
    render() {
        
      return (
        <div className="media-container-row headerbg">
            <nav>
                <a className="logo" href="#">Likely</a>
                <ul className="head">
                    <li><a href="#contact">Home</a></li>
                    <li><a href="#about">Accont Setting</a></li>
                    <li><a href="#logout">Logout</a></li>
                </ul>
            </nav>

        </div>
        
      );
    }
  }


export default Loginnav;