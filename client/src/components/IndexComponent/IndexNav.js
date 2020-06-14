import React from "react";

class IndexNav extends React.Component {
  render() {

    return (
      <div className="container-fluid headerbg">
        <div className="col-md-12">
          <nav>
            <a className="logo" href="#">Likely</a>
            <ul className="head">
              <li><a href="#contact">Help</a></li>
              <li><a href="#about">Login</a></li>
            </ul>
          </nav>
        </div>
      </div>

    );
  }
}
export default IndexNav;