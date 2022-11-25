import React, { Component } from "react";

export default class HomeLibro extends Component {
  render() {
    return (
      <container class ="container xl">
          <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="mockup.jpg" class="d-block w-100" alt="n" />
          </div>
          <div class="carousel-item">
            <img src="mockup.jpg" class="d-block w-100" alt="b" />
          </div>
          <div class="carousel-item">
            <img src="bookp.jpg" class="d-block w-100" alt="e" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </container>
      
    );
  }
}
