import React from "react";
import styled from "styled-components";

const FeaturedList = () => {
  return (
    <Div>
      <div className="flist">
        <div className="fListItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
            alt=""
            className="flistImg"
          />
          <span className="flistName">Aparthotel Stare Miasto</span>
          <span className="flistCity">Madrid</span>
          <span className="flistPrice">Starting from $120</span>
          <div className="flistRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>

        <div className="fListItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
            alt=""
            className="flistImg"
          />
          <span className="flistName">Aparthotel Stare Miasto</span>
          <span className="flistCity">Madrid</span>
          <span className="flistPrice">Starting from $120</span>
          <div className="flistRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>

        <div className="fListItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
            alt=""
            className="flistImg"
          />
          <span className="flistName">Aparthotel Stare Miasto</span>
          <span className="flistCity">Madrid</span>
          <span className="flistPrice">Starting from $120</span>
          <div className="flistRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>

        <div className="fListItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
            alt=""
            className="flistImg"
          />
          <span className="flistName">Aparthotel Stare Miasto</span>
          <span className="flistCity">Madrid</span>
          <span className="flistPrice">Starting from $120</span>
          <div className="flistRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>

        <div className="fListItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
            alt=""
            className="flistImg"
          />
          <span className="flistName">Aparthotel Stare Miasto</span>
          <span className="flistCity">Madrid</span>
          <span className="flistPrice">Starting from $120</span>
          <div className="flistRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>
    </Div>
  );
};

const Div = styled.div`
  .flist {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    max-width: 1024px;
    width: 100%;

    .fListItem {
      gap: 10px;
      flex: 1;
      flex-direction: column;
      display: flex;

      .flistImg {
        width: 100%;
        height: 250px;
        object-fit: cover;
      }
      .flistName {
        color: #333;
        font-weight: bold;
      }
      .flistCity {
        font-weight: 300;
        color: gray;
      }
      .flistPrice {
        font-weight: 500;
      }
      .flistRating > button {
        background-color: #003580;
        color: #fff;
        padding: 3px;
        margin-right: 10px;
        font-weight: bold;
        border: none;
      }
      .flistRating > span {
        font-weight: 200;
        font-size: 14px;
      }
    }
  }
`;
export default FeaturedList;
