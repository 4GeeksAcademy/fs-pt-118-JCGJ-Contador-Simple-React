import react from "react";


export const Card = (props) => {
  
  return (
    <div className= "m-1">
      <div
        className="card text-bg-dark d-flex justify-content-center align-items-center"
        style={{ width: "4rem", height: "6rem" }}>
        <p className="display-4 m-0">{props.value}</p>
      </div>
    </div>
  );
};