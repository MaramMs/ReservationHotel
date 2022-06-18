import React from "react";
import { Footer, Header, Mail, Navbar } from "../components";
import styled from "styled-components";
import { GrLocation, GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { RiCloseCircleLine } from "react-icons/ri";
import { useState } from "react";
const photos = [
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
  },
];

const Hotel = () => {
  const [silderNumber, setSilderNumber] = useState(0);
  const [openSilder, setOpenSlider] = useState(false);
  const handleSilder = (i) => {
    setSilderNumber(i)
    setOpenSlider(true);
  };

  const handleMove =(direction) =>{
    let newSilderNumber;
    if(direction ==='l'){
      newSilderNumber = silderNumber===0 ? 5 : silderNumber-1;
    } else{
      newSilderNumber = silderNumber===5 ? 0 : silderNumber+1;

    }
    setSilderNumber(newSilderNumber);
  }
  return (
    <Div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {openSilder && (
          <div className="silder">
            <RiCloseCircleLine
              className="close"
              onClick={() => setOpenSlider(!openSilder)}
            />
            <GrLinkPrevious className="arrow" onClick={() => handleMove('l')}/>
            <div className="silderWrapper">
              <img
                src={photos[silderNumber].src}
                alt=""
                className="silderImage"
              />
            </div>
            <GrLinkNext className="arrow" onClick={()=>handleMove('r')} />
          </div>
        )}

        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1>Grand Hotel</h1>
          <div className="hotelAddress">
            <GrLocation />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImage">
            {photos.map((photo, index) => (
              <div className="Images" key={index}>
                <img
                  src={photo.src}
                  alt=""
                  className="hotelImge"
                  onClick={() => handleSilder(index)}
               
                />
              </div>
            ))}
          </div>

          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h2>Stay in the heart of Cit</h2>
              <p>
                {" "}
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="hotelPrice">
              <h2>Perfect for a 9-night stay!</h2>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <p>
                {" "}
                <b>$945</b>(9 nights)
              </p>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <Mail />
      <Footer />
    </Div>
  );
};

const Div = styled.div`
  .hotelContainer {
    align-items: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    .silder {
      position: sticky;
      top: 0%;
      left: 0%;
      width: 100%;
      height: 100vh;
      background-color: rgba(0,0,0,0.0613);
      z-index: 999;
      display: flex;
      align-items: center;
      
    

      .close {
        position: absolute;
        top: 20px;
        right: 0px;
        font-size: 40px;
        color: lightgray;
        cursor: pointer;
      }
      .silderWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

       
      }
      .silderImage {
        width: 80%;
        height: 80vh;
      }
      .arrow {
        font-size: 2rem;
        cursor: pointer;
        background-color: lightgray;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        padding: 10px;
        color: gray;
      }
    }
    .hotelWrapper {
      position: relative;
      width: 100%;
      max-width: 1024px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      .hotelWrapper > h2 {
        font-size: 20px;
        font-weight: bold;
      }
      .bookNow {
        position: absolute;
        right: 0;
        top: 10px;
        border: none;
        background-color: #0071c2;
        color: #fff;
        border-radius: 5px;
        padding: 10px 20px;
        font-weight: bold;
        cursor: pointer;
      }
      .hotelAddress {
        display: flex;
        gap: 10px;
        align-items: center;
        font-size: 12px;
      }
      .hotelDistance {
        font-size: 18px;
        color: #0071c2;
        font-weight: bold;
      }
      .hotelPriceHighlight {
        color: #008001;
        font-size: 18px;
        font-weight: bold;
      }
    }
    .hotelImage {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .Images {
        width: 33%;
        .hotelImge {
          width: 100%;
          object-fit: cover;
          cursor: pointer;
        }
      }
    }
    .hotelDetails {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      .hotelDetailsText {
        flex: 3;
      }
      .hotelDetailsText > h2 {
        font-size: 24px;
        margin-bottom: 10px;
      }
      .hotelDetailsText > p {
        font-size: 16px;
      }
      .hotelPrice {
        flex: 1;
        background-color: #ebf3ff;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .hotelPrice > button {
        border: none;
        background-color: #0071c2;
        color: #fff;
        border-radius: 5px;
        padding: 10px 20px;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
`;
export default Hotel;
