import React, { Component } from 'react';

class Footer extends Component{
    render(){
        const footermenu = {
            align:"center",
            marginLeft:"10px",
            marginRight:"10px",
            overflow: "hidden",
            listStyleType:"none"
        };
        return(
            <div className="media-container-row footerbg">
                <div className="col-sm-12" style={footermenu}>
                    <ul>
                        <li><a href="#contact">About</a></li>
                        <li><a href="#contact">Terms</a></li>
                        <li><a href="#contact">Help</a></li>
                    </ul>
                </div>
                <div className="media-container-row" style={{backgroundColor:"rgb(100, 124, 100)"}}>
                <div className="col-sm-12">
                <p className="">
                        © Copyright 2020 - All Rights Reserved
                    </p>
                </div>
                </div>


            </div>
        );
    }
}
 export default Footer;