import react from "react";


// aqui lo hacemos de la forma simple utilizando props (prpos.value)
/* export const Card = (porps) => {
  
  return (
    <div className= "m-1">
      <div
        className={"card text-bg-dark d-flex justify-content-center align-items-center" }
        style={{ width: "4rem", height: "6rem" }}>
        <p className="display-4 m-0">{props.value}</p>
      </div>
    </div>
  );
}; */

// segunda forma desestructurando props ({value, pasamos---> className para aplicar los colors})
export const Card = ({value, className}) => {
  
  return (
    <div className= "m-1">
      <div
        className={`card text-bg-dark d-flex justify-content-center align-items-center ${className}`}
        style={{ width: "4rem", height: "6rem" }}>
        <p className="display-4 m-0">{value}</p>
      </div>
    </div>
  );
};