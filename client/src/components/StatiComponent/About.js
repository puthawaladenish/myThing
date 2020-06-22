import React, { Component } from 'react';


class About extends React.Component {
    render() {
         const boxsize ={height: "600px",
                         width: "200px"}
        return (
            <div className="container-fluid">
                <div class="row middlebg" >
                    <div class="col-md-12 sideinfo">
                        <div style={boxsize}>
                        <h1> About </h1>
                        </div>
                        </div>

                </div>
            </div>
            
        );
    }
}
export default About;