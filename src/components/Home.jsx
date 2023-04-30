import React from "react";
import Products from "./Products";
export default function Home() {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide border-0 h-25">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner h-15" >
          <div className="carousel-item active">
            <img src="https://as2.ftcdn.net/v2/jpg/02/92/56/91/1000_F_292569116_Phht4uRj1YIuLFgBhrLu8171npBOcJcr.jpg" className="d-block w-100 " alt="banner 1" />
          </div>
          <div className="carousel-item">
            <img src="https://as2.ftcdn.net/v2/jpg/02/20/10/25/1000_F_220102512_DwScZjA9hJaBOH2BS3vraUehWijM5an8.jpg" className="d-block w-100" alt="banner 2" />
          </div>
          <div className="carousel-item">
            <img src="https://as2.ftcdn.net/v2/jpg/03/74/70/87/1000_F_374708725_15NeHOHkqHieIQYm3oTKQYZii99KALh1.jpg" className="d-block w-100" alt="banner 3" />
          </div>
          
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
      <Products />
    </>
  );
}
