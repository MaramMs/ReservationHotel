import React from "react";
import styled from "styled-components";

const Features = () => {
  return (
    <Div>
      <div className="features">
        <div className="feature">
          <img
            className="featuresImg"
            src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
            alt=""
          />
          <div className="featuresTitles">
            <h1>Dublin</h1>
            <h2>123 properties</h2>
          </div>
        </div>
        <div className="feature">
          <img
            className="featuresImg"
            src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
            alt=""
          />
          <div className="featuresTitles">
            <h1>Dublin</h1>
            <h2>123 properties</h2>
          </div>
        </div>

        <div className="feature">
          <img
            className="featuresImg"
            src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
            alt=""
          />
          <div className="featuresTitles">
            <h1>Dublin</h1>
            <h2>123 properties</h2>
          </div>
        </div>
      </div>
    </Div>
  );
};

const Div = styled.div`
  .features {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1024px;
    gap: 20px;
    z-index: 1;
    

    .feature {
      position: relative;
      overflow: hidden;
      border-radius: 10px;
      color: #fff;
      .featuresImg {
        width: 100%;
        max-width: 100%;
        object-fit: cover;
     
      }
      .featuresTitles {
        position: absolute;
        bottom: 25px;
        left: 10px;
      }


    }
  }
`;
export default Features;
