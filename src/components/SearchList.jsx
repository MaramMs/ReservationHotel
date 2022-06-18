import React from "react";
import styled from "styled-components";

const SearchList = () => {
  return (
    <Div>
      <div className="searchItem">
        <img
          className="searchImg"
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
        />

        <div className="searchItemDesc">
          <h2 className="descTitle">Tower Street Apartments</h2>
          <span className="siDistance">500m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            {" "}
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
            {" "}
            Entire studio • 1 bathroom • 21m² 1 full bed
          </span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="searchItemDetails">
          <div className="itemRating">
            <span>Excellent</span>
            <button className="btnRating">8.9</button>
          </div>

          <div className="detailsText">
            <span className="detailsTextPrice"> $ 223</span>
            <span className="detailsTax">Includes taxes and fees</span>
            <button className="detailsButton">See availability</button>
          </div>
        </div>
      </div>
    </Div>
  );
};

const Div = styled.div`
  .searchItem {
    margin-bottom: 20px;
    width: 100%;
    border: 1px solid #e6e6e6;
    padding: 10px;
    display: flex;
    gap: 20px;
    .searchImg {
      width: 200px;
      height: 250px;
      object-fit: cover;
      border-radius: 10px;
    }
    .searchItemDesc {
      display: flex;
      flex-direction: column;
      gap: 17px;
      flex: 2;
      .descTitle {
        font-size: 1.5rem;
        color: #0071c2;
      }
      .siDistance {
        font-size: 0.9rem;
      }
      .siTaxiOp {
        background-color: #008009;
        width: max-content;
        padding: 5px;
        border-radius: 5px;
        color: #fff;
      }
      .siSubtitle {
        font-weight: bold;
        font-size: 1rem;
      }

      .siFeatures {
        font-size: 0.9rem;
      }
      .siCancelOp {
        color: #008009;
        font-weight: bold;
      }
      .siCancelOpSubtitle {
        color: #008009;
        font-size: 0.9rem;
      }
    }
    .searchItemDetails {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .itemRating {
        display: flex;
        justify-content: space-between;

        .btnRating {
          background-color: #003580;
          padding: 3px;
          border: none;
          border-radius: 3px;
          color: white;
        }
      }
      .detailsText {
        display: flex;
        flex-direction: column;
        text-align: right;
        gap: 10px;

        .detailsTextPrice {
        }
        .detailsTax {
          font-size: 0.9rem;
          color: gray;
        }
        .detailsButton{
            border:none;
            boder-raduis:10px;
            color: #fff;
            padding:10px;
            background-color: #007ac2;
            cursor: pointer;

        }
      }
    }
  }
`;
export default SearchList;
