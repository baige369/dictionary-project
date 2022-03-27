import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.phonetics);
  return (
    <div className="Phonetics">
      <span className="audio">
        <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
          🔊
        </a>
      </span>
      <span className="text">{props.phonetics.text}</span>
    </div>
  );
}
