import React, { Component } from 'react';

class Maininfo extends React.Component {
    render() { 
        const info = require('../pics/info.gif');
        
        return (
            <div class="row middlebg" >
                <div class="col-sm-6 sideinfo">
                    <p> A social platform where people can express what they are use.</p>
                    {/*<img src={phone}  alt="Phone" width="50" height="50"/><br/>
                    <img src={laptop}  alt="Phone" width="50" height="50"/><br/>
                    <img src={pc}  alt="Phone" width="50" height="50"/><br/>
                    <img src={camera}  alt="Phone" width="50" height="50"/><br/>
                    <img src={watch}  alt="Phone" width="50" height="50"/><br/>
        <img src={car}  alt="Phone" width="50" height="50"/><br/>*/}
                    <img src={info}  alt="Phone" width="500" height="500"/><br/>

                    <p>Simpally register enter your your thing's info, get your public link and put your social media platform's info section</p>  
                </div>
                <div class="col-sm-6" >
                    <form action="">
      <input class="form-control" id="focusedInput" type="text"></input>
      <input class="form-control" id="focusedInput" type="text"></input>
      <input class="form-control" id="focusedInput" type="text"></input>
      <input class="form-control" id="focusedInput" type="text"></input>
      <input class="form-control" id="focusedInput" type="text"></input>
      <input class="form-control" id="focusedInput" type="text"></input>
                    </form>
                </div>
            </div>
        );
    }
}
export default Maininfo;