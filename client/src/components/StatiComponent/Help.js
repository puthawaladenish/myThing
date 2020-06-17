import React, { Component } from 'react';

class Help extends React.Component {
    render() {
         const boxsize ={height: "200px",
                         width: "200px"}
        return (
            <div className="container-fluid">
                <div class="row middlebg" >

                    <div class="col-md-12 sideinfo">
                        <div style={boxsize}>
                           
                        </div>
                        </div>

                </div>
            </div>
        );
    }
}
export default Help;