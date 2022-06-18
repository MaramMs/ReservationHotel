import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { FaBed, FaPlane, FaCalendarAlt } from "react-icons/fa";
import { DateRange } from "react-date-range";
import { AiOutlineCar } from "react-icons/ai";
import { BsPersonPlus } from "react-icons/bs";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {
  const navigate = useNavigate()
  const [openDate, setOpenDate] = useState(false);
  const [destination,setDestination] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleCounter = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
    }));
  };

  const handleSearch =() =>{
    navigate('/hotels',{state:{destination,date,options}})
  }
  return (
    <Div>
      <div className="header">
        <div className={type === 'list' ? 'headerContainer list' : 'headerContainer'}>
          <div className="headerList">
            <div className="headerListItem active">
              <FaBed />
              <span> Stays</span>
            </div>
            <div className="headerListItem">
              <FaPlane />
              <span> Flights</span>
            </div>
            <div className="headerListItem">
              <AiOutlineCar />
              <span> Car rentals</span>
            </div>
            <div className="headerListItem">
              <FaBed />
              <span>Airport taxis</span>
            </div>
            <div className="headerListItem">
              <FaBed />
              <span>Attractions</span>
            </div>
          </div>

       { type !== 'list' && 
          <>
           <h1 className="headerTitle">
            {" "}
            A lifetime of discounts? It's Genius.
          </h1>
          <p className="headerText">
            Get rewarded for your travels unlock instant savings of 10% or with
            a free MBooking account.
          </p>
          <button className="headerBtn">Sign in / Register</button>

          <div className="headerSearch">
            <div className="headerSearchItem">
              <FaBed className="headerIcon" />
              <input
                type="text"
                placeholder="Where are you going?"
                className="headerSearchInput"
                onChange={(e)=>setDestination(e.target.value)}
              />
            </div>

            <div className="headerSearchItem">
              <FaCalendarAlt className="headerIcon" />

              <span
                className="headerSearchText"
                onClick={() => setOpenDate(!openDate)}
              >
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}{" "}
              </span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                  minDate={new Date()}
                />
              )}
            </div>

            <div className="headerSearchItem">
              <BsPersonPlus className="headerIcon" />
              <span
                className="headerSearchText"
                onClick={() => setOpenOptions(!openOptions)}
              >
                {`${options.adult} adults. ${options.children} children . ${options.room} rooms`}
              </span>
              {openOptions && (
                <div className="options">
                  <div className="optionsItem">
                    <span className="optionText">Adults</span>
                    <div className="optionsItemInput">
                      <button
                        disabled={options.adult <= 1}
                        className="optionCounterButton"
                        onClick={() => handleCounter("adult", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {" "}
                        {options.adult}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleCounter("adult", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="optionsItem">
                    <span className="optionText">children</span>
                    <div className="optionsItemInput">
                      <button
                        disabled={options.children <= 1}
                        className="optionCounterButton"
                        onClick={() => handleCounter("children", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {" "}
                        {options.children}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleCounter("children", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="optionsItem">
                    <span className="optionText">Room</span>
                    <div className="optionsItemInput">
                      <button
                        disabled={options.room <= 1}
                        className="optionCounterButton"
                        onClick={() => handleCounter("room", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {" "}
                        {options.room}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleCounter("room", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="headerSearchItem">
              <button className="searchButton" onClick={()=> handleSearch()}> Search</button>
            </div>
          </div>
        
        </>
       }
        </div>
      </div>
    </Div>
  );
};

const Div = styled.div`
  .header {
    background-color: #003580;
    display: flex;
    justify-content: center;
    color: white;
    position: relative;
    .headerContainer.list {
      margin: 20px 0px 40px 0px;
    }
    .headerContainer {
      width: 100%;
      max-width: 1024px;
      margin: 20px 0px 100px 0px;
      .headerList {
        display: flex;
        gap: 40px;

        .headerListItem {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .headerListItem.active {
          border: 1px solid white;
          padding: 10px;
          border-radius: 20px;
        }
      }

      .headerTitle {
        margin: 20px 0px;
      }
      .headerText {
        margin: 20px 0px;
        font-size: 1.2rem;
      }
      .headerBtn {
        border: none;
        padding: 10px;
        color: white;
        background-color: #0071c2;
        font-weight: 500;
        cursor: pointer;
      }

      .headerSearch {
        display: flex;
        justify-content: space-around;
        align-items: center;
        border: 3px solid #febb02;
        background-color: white;
        border-radius: 5px;
        padding: 10px 0px;
        position: absolute;
        width: 100%;
        max-width: 1024px;
        bottom: -25px;
        .headerSearchItem {
          display: flex;
          align-items: center;
          gap: 10px;

          .headerSearchInput {
            padding: 10px;
            border: none;
            outline: none;
          }
          .headerIcon {
            color: lightgrey;
          }
          .headerSearchText {
            color: lightgrey;
          }
          .date {
            position: absolute;
            top: 50px;
            z-index: 2;
          }

          .options {
            background-color: white;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            position: absolute;
            top: 50px;
            color: gray;
            border-radius: 5px;
            z-index: 2;
            padding: 10px;
            .optionsItem {
              width: 200px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin: 10px;

              .optionsItemInput {
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 1.2rem;
                .optionCounterNumber {
                  color: #000;
                }
                .optionCounterButton {
                  width: 30px;
                  height: 30px;
                  cursor: pointer;
                  color: #0071c2;
                  border: 1px solid #0071c2;
                  background-color: white;
                  &:disabled {
                    cursor: not-allowed;
                  }
                }
              }
            }
          }
          .searchButton {
            border: none;
            background-color: #003580;
            color: white;
            padding: 10px;
          }
        }
      }
    }
  }
`;
export default Header;
