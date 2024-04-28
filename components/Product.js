import React from 'react'
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Product = ({ title, price }) => {
  return (
    <div>
      <p style={{ size: "28px", fontWeight: "bold" }}>
        {title}
        <span style={{ size: "24px", fontWeight: "normal" }}> ${price}</span>
      </p>
    </div>
  )
}

export default Product
