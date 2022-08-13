import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card" key={props.id}>
      {props.src && <img src={props.src} className={"imgClass"} />}
      <p className="text-xl mb-2 font-bold text-blue-500"> {props.name} </p>
      {props.email && (
        <div className="flex">
          <p className="mr-4 font-bold text-blue-500">Email</p> 
          <p>{props.email}</p>
        </div>
      )}
      {props.phone && (
        <div className="flex">
          <p className="mr-4 font-bold text-blue-500">Phone </p>
          <p>{props.phone}</p>
        </div>
      )}
        {props.company && (
        <div className="flex">
          <p className="mr-4 font-bold text-blue-500">Company </p>
          <p>{props.company}</p>
        </div>
      )}
      {props.btnText && (
        <button className="bg-blue-500 text-white px-8 py-2 my-4" onClick={props.onClick}>
          {props.btnText}
        </button>
      )}
    </div>
  );
}
export default Card;
