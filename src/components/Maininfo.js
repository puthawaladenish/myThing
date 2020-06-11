import React, { Component } from 'react';

class Maininfo extends React.Component {
    render() {
        const info = require('../pics/info.gif');
        
        return (
            <div className="container-fluid">
            <div class="row middlebg test" >

                <div class="col-md-6 sideinfo">
                    <p> A social platform where people can express what they are use.</p>
                    <img src={info} alt="Phone" width="400" height="500" /><br />
                    <p>Simpally register enter your your thing's info, get your public link and put your social media platform's info section</p>
                </div>

                <div class="col-md-6" >
                        <div>
                            <h1 style={{ textAlign: "center" }}> Create an Acount</h1>
                        </div>
                        <div className="container">
                        <form action="">
                            <div className="form-row" >
                                <input class="form-control col inputform" id="focusedInput" type="text" placeholder="First name"></input>
                                <input class="form-control col inputform" id="focusedInput" type="text"  placeholder="Last name"></input>
                            </div>
                            <div className="form-row "style={{ textAlign: "center" }}>
                                <input class="form-control col inputform" id="focusedInput" type="text"  placeholder="E-mail address"></input><br />
                            </div>
                            <div className="form-row">
                                <input class="form-control col inputform" id="focusedInput" type="text"  placeholder="Sex"></input>
                                <input class="form-control col inputform" id="focusedInput" type="text"  placeholder="Confirm Password"></input>
                            </div>
                            <div className="form-row">
                                <input class="form-control col inputform" id="focusedInput" type="text"  placeholder="Password"></input>
                                <input class="form-control col inputform" id="focusedInput" type="text"  placeholder="Confirm Password"></input>
                            </div>
                            <div style={{textAlign:"center",margin: "50px 20px 20px 20px"}}>
                            <input type="submit" value="Sign up" />
                            </div>
                            
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Maininfo;