import React, { Component } from 'react'

export class ContactDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            email: props.email,
            availability: props.availability,
        }

            console.log("Child Constructor");   // React Lifecycle
    }

    componentDidMount(){
        console.log("Child Component Mount"); // React Lifecycle
    }

    changeColor =()=>{
        if(this.state.availability==="Yes"){
            this.setState({availability:"No"});
        }
        else{
            this.setState({availability:"Yes"});
        }
    }
  render() {
    console.log("child render");
    return (
      <div>
        <p>
        Contact Name: {this.state.name}
        <br />
        Contact Email: {this.state.email}
        <br />
        Available?: {this.state.availability}
        <br />
        <button type="button" onClick={this.changeColor}>
          Change Availability
        </button>
      </p>
      </div>
    )
  }
}

export default ContactDetails
