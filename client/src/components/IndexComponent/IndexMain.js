import React, { Component } from 'react';

class IndexMain extends React.Component {

   constructor(props) {
       super(props)
   
       this.state = {
            firstname:'',
            lastname:'',
            email:'',
            bdate:'',
            gender:'Female',
            password:'',
            cpassword:''
       }
       this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
       this.handleLastnameChange = this.handleLastnameChange.bind(this);
       this.handleEmailChange = this.handleEmailChange.bind(this);
       this.handleBdateChange = this.handleBdateChange.bind(this);
       this.handlePasswordChange = this.handlePasswordChange.bind(this);
       this.handleCPasswordChange = this.handleCPasswordChange.bind(this);
       this.handleRadioChange = this.handleRadioChange.bind(this);
    }
       handleRadioChange(event){
           this.setState({
               [event.target.name]:event.target.value
           })
       };

       handleFirstnameChange(event){
         this.setState({
             firstname:event.target.value,
         })
       };
       handleLastnameChange(event){
        this.setState({
            lastname:event.target.value,
        })
      };
      handleEmailChange(event){
        this.setState({
            email:event.target.value,
        })
      };
      handleBdateChange(event){
       this.setState({
           bdate:event.target.value,
       })
     }; handlePasswordChange(event){
        this.setState({
            password:event.target.value,
        })
      };
      handleCPasswordChange(event){
       this.setState({
           cpassword:event.target.value,
       })
     };
     
     render() {
        const info = require('../../pics/info.gif');

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
                                    <input value={this.state.firstname} 
                                     onChange={this.handleFirstnameChange}
                                    class="form-control col inputform" id="focusedInput" type="text" placeholder="First name"/>
                                    <input value={this.state.lastname} 
                                    onChange={this.handleLastnameChange}
                                    class="form-control col inputform" id="focusedInput" type="text" placeholder="Last name"/>
                                </div>
                                <div className="form-row " >
                                    <input value={this.state.email} 
                                     onChange={this.handleEmailChange}
                                    class="form-control col inputform" id="focusedInput" type="text" placeholder="E-mail address"/><br />
                                    <input value={this.state.bdate} 
                                     onChange={this.handleBdateChange}
                                    class="form-control col inputform" id="focusedInput" type="date" placeholder="Birth Date"/>
                                </div>

                                <div className="form-row">   
                                <div className="form-check mr-3 ml-4" >
                                        <label className="form-check-label" >                                         
                                            <input
                                            checked={this.state.gender==="Female"}
                                            onClick={this.handleRadioChange}
                                            type="radio" className="form-check-input" id="radio1" name="gender" value="Female" checked/>Female
                                        </label>
                                    </div>
                                    <div className="form-check mr-3">
                                        <label className="form-check-label">                                            
                                           <input 
                                           checked={this.state.gender === "Male"} 
                                           onClick={this.handleRadioChange}
                                           type="radio" className="form-check-input" id="radio2" name="gender" value="Male"/>Male
                                        </label>
                                    </div>
                                    <div className="form-check mr-3">
                                        <label className="form-check-label">
                                           <input 
                                           checked={this.state.gender === "Other"} 
                                           onClick={this.handleRadioChange}
                                           type="radio" className="form-check-input" id="radio2" name="gender" value="Other"/>Other
                                        </label>
                                    </div>
                                    <div></div>

                        
                                    
                                </div>
                                <div className="form-row">
                                    <input value={this.state.password} 
                                     onChange={this.handlePasswordChange}
                                    class="form-control col inputform" id="focusedInput" type="text" placeholder="Password"/>
                                    <input value={this.state.cpassword} 
                                     onChange={this.handleCPasswordChange}
                                    class="form-control col inputform" id="focusedInput" type="text" placeholder="Confirm Password"/>
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
export default IndexMain;