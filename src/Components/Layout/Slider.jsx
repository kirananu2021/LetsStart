import React, { Component } from "react";
import "./button.css";
class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sliders : ["https://opensourcezeal.files.wordpress.com/2015/12/cropped-kalam-quote-23.jpg",
      "https://opensourcezeal.files.wordpress.com/2015/12/cropped-kalam-quote-26.jpg",
      "https://opensourcezeal.files.wordpress.com/2015/12/cropped-kalam-quote-22.jpg"],
    }
  
  }
  
  UpdateState = () => {
     alert("Hi")
    this.setState({sliders:[]})
  }
  render() {
    return (
      // <!-- Carousel -->
      <>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        {/* <!-- Indicators/dots --> */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
        </div>

        {/* <!-- The slideshow/carousel --> */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://opensourcezeal.files.wordpress.com/2015/12/cropped-kalam-quote-23.jpg"
              alt="Los Angeles"
              className="d-block w-100"
            />
          </div> {
             this.state.sliders.map((slider,index)=>{
              return (   <div className="carousel-item" key={index}>
              <img
                src= {slider}
                alt="Chicago"
                className="d-block w-100"
              />
            </div>

              )
             })
          }
          
        </div>

        {/* <!-- Left and right controls/icons --> */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      <button onClick={this.UpdateState} className= "button">Update the State</button>
      </>
    );
  }
}

export default Slider;



