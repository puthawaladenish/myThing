import React, { Component } from 'react';

class Maininfo extends React.Component {
    render() {
        const info = require('../pics/info.gif');

        return (
            <div className="container-fluid">
                <div class="row middlebg" >

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
                                    <input class="form-control col inputform" id="focusedInput" type="text" placeholder="Last name"></input>
                                </div>
                                <div className="form-row " >
                                    <input class="form-control col inputform" id="focusedInput" type="text" placeholder="E-mail address"></input><br />
                                    <input class="form-control col inputform" id="focusedInput" type="date" placeholder="date"></input>
                                </div>

                                <div className="form-row">
                                    
                                <div className="form-check mr-3 ml-4" >
                                        <label className="form-check-label" htmlFor="radio1">                                         
                                            <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" checked></input>Male
                                        </label>
                                    </div>
                                    <div className="form-check mr-3">
                                        <label className="form-check-label" htmlFor="radio2">                                            
                                           <input type="radio" className="form-check-input" id="radio2" name="optradio" value="option2"></input>Female
                                        </label>
                                    </div>
                                    <div className="form-check mr-3">
                                        <label className="form-check-label">
                                           <input type="radio" className="form-check-input" id="radio2" name="optradio" value="option2"></input>Other
                                        </label>
                                    
                                    </div>

                        
                                    
                                </div>
                                <div className="form-row">
                                    <input class="form-control col inputform" id="focusedInput" type="text" placeholder="Password"></input>
                                    <input class="form-control col inputform" id="focusedInput" type="text" placeholder="Confirm Password"></input>
                                </div>
                                <div style={{ textAlign: "center", margin: "50px 20px 20px 20px" }}>
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