import React from "react";
import "../App.css";
function Card() {
  return (
    <div className="container">
      <h1>Primary actions</h1>
      <p>
        Lorem Ipsum is simply dummy text for printers and text files. Lorem
        Ipsum has been the standard dummy text of industries since the year
        1500, when a printer N. del T. person who is engaged in printing unknown
        used a gallery of texts and mixed them in such a way that he managed to
        make a textbook specimen.
      </p>
      <div className="items">
        <div className="card">
          <img
            src="https://www.anipedia.net/imagenes/iguanas-800x375.jpg"
            alt="iguana"
          />
          <div className="titulo">
            <h1 className="titulo">lizard</h1>
            <p className="parrafo">
              Lorem Ipsum is simply dummy text for printers and text files.
              Lorem Ipsum has been the standard dummy text of industries since
              the year 1500, when a printer N. del T. person who is engaged in
              printing unknown used a gallery of texts and mixed them in such a
              way that he managed to make a textbook specimen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
