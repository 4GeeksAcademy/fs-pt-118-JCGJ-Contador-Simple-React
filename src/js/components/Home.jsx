import React from "react";

//include images into your bundle
import { Card } from "./Card.jsx";

//create your first component
const Home = ({ timer }) => {
  /*   // centenas de mil
  const d1 = timer >= 100000 ? Math.floor(timer / 100000) % 10 : 0;
  //  decenas de mil
  const d2 = timer >= 10000 ? Math.floor(timer / 10000) % 10 : 0;
  //  millares
  const d3 = timer >= 1000 ? Math.floor(timer / 1000) % 10 : 0;
  //  centenas
  const d4 = timer >= 100 ? Math.floor(timer / 100) % 10 : 0;
  // decenas 
  const d5 = timer >= 10 ? Math.floor(timer / 10) % 10 : 0;
  // Unidades
  const d6 = timer % 10; */

  const digit = [
    Math.floor(timer / 100000) % 10,
    Math.floor(timer / 10000) % 10,
    Math.floor(timer / 1000) % 10,
    Math.floor(timer / 100) % 10,
    Math.floor(timer / 10) % 10,
    timer % 10,
  ];
  // quise agregar colores al contador algo parecido a lo de clases 
  const colors = [
    "text-success",
    "text-warning",
    "text-danger",
    "text-primary",
    "text-ligth",
  ];
  // esto va ser que cada 10s el contador cambie de color tomando el indice de colors[0,1,2,3,4]
  const colorIndex = Math.floor(timer / 10) % colors.length;

  return (
    <div className="container d-flex flex-column align-items-center my-3">
      <div className="card-header text-center mb-3">
        <h1>Counter Simple</h1>
      </div>

      <div className="d-flex align-items-center">
        <i className="fs-1 me-3 fa-solid fa-clock"></i>
        {/* Mostramos los 6 dígitos */}
        {/*   <Card value={d1} />
          <Card value={d2} />
          <Card value={d3} />
          <Card value={d4} />
          <Card value={d5} />
          <Card value={d6} /> */}
        {/* segunda forma con map */}
        {digit.map((el, i) => (
          <Card key={[i]} value={el} className={colors[colorIndex]} />
        ))}
      </div>
    </div>
  );
};

export default Home;
