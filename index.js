import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "This is a react Element.");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// console.log(heading);

const JSXheading = (<h1>This is a JSX heading.
                        This is another line. {  }
                    </h1>);

// root.render(JSXheading);

// Functional components.
// Class based components.

const heading = function() {
    return "This is a normal function";
}


function Heading() {
    return <>This is a normal function.</>;
}



const ArrowHeading = () => {
    return (<h1>This is an arrow function.<br></br> <Heading /> { 5 * 5 } </h1>);
};


root.render(<ArrowHeading />);