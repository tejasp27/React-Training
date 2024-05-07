

import React, { Component } from 'react'
import { Container } from "react-bootstrap";
import withImportantStyle from "react-with-important-style";
import ContactDetails from './ContactDetails';

export class Careers extends Component {
    constructor(props) {
        super(props)
        console.log("Parent Constructor");      // React Lifecycle
    }

    componentDidMount() {
        console.log("Parent Component Did mount")       // React Lifecycle
    }

  render() {
    console.log("parent render");
    return (
        <div className="container">
        <div className="card-left">
          <h2 className="item-title">Contact Us Details</h2>
        <ContactDetails 
            name={"Tejas Patil"}
            email={"abc@gmail.com"}
            availability={"Yes"}
        />
        </div>
      </div>
    )
  }
}

export default Careers
