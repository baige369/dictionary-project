import React from "react";

export default function Example(props) {
  console.log(props);
  if (props.example) {
    return (
      <div className="Example">
        <em>Example: </em>
        <em>{props.example}</em>
      </div>
    );
  } else {
    return null;
  }
}
