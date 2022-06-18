import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Header, SearchList } from "../components";
import styled from "styled-components";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [options, setOptions] = useState(location.state.options);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  return (
    <Div>
      <Navbar />

      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h2 className="searchTitle">Search</h2>
            <div className="lSItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>

            <div className="lSItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {" "}
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}{" "}
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
              </span>
            </div>
            <div className="lSItem">
              <label>Options</label>
              <div className="lSItemOptions">
                <div className="optionItem">
                  <span>
                    Min Price <small> per night</small>{" "}
                  </span>
                  <input type="text" />
                </div>

                <div className="optionItem">
                  <span>
                    Max Price <small> per night</small>{" "}
                  </span>
                  <input type="text" />
                </div>
                <div className="optionItem">
                  <span>Adults </span>
                  <input type="number" min={1} placeholder={options.adult} />
                </div>
                <div className="optionItem">
                  <span> Children </span>
                  <input type="number" min={0} placeholder={options.children} />
                </div>
                <div className="optionItem">
                  <span> Room </span>
                  <input type="number" min={1} placeholder={options.room} />
                </div>
              </div>
            </div>

            <button className="searchButton">Search</button>
          </div>
          <div className="listResult">
            <SearchList />

            <SearchList />
            <SearchList />
            <SearchList />
            <SearchList />
            <SearchList />
            <SearchList />
            <SearchList />
            <SearchList />
            <SearchList />
            <SearchList />
          </div>
        </div>
      </div>
    </Div>
  );
};

const Div = styled.div`
  .listContainer {
    display: flex;
    justify-content: center;
    margin-top: 20px;

    .listWrapper {
      width: 100%;
      max-width: 1024px;
      display: flex;
      gap: 20px;

      .listSearch {
        flex: 1;
        background-color: #febb02;
        padding: 10px;
        border-radius: 5px;
        position: sticky;
        top: 10px;
        height: max-content;

        .searchTitle {
          font-size: 20px;
          color: gray;
          font-weight: 800;
        }
        .lSItem {
          margin-bottom: 10px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .lSItem > input {
          padding: 10px;
          width: 100%;
          margin-top: 10px;
          outline: none;
        }
        .lSItem > span {
          display: flex;
          flex-direction: column;
          cursor: pointer;
          padding: 10px;
          width: 100%;
          margin-top: 10px;
          background-color: #fff;
        }
        .lSItemOptions {
          margin-top: 10px;
          padding: 10px;
          display: flex;
          flex-direction: column;
          .optionItem {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
            font-size: 14px;
            color: #555;
          }
          .optionItem > input {
            width: 50%;
          }
        }
        .searchButton {
          width: 100%;
          background-color: #0071c2;
          border-radius: 5px;
          border: none;
          outline: none;
          padding: 10px;
          color: #fff;
          cursor: pointer;
          font-weight: 500;
        }
      }
      .listResult {
        flex: 3;
      }
    }
  }
`;
export default List;
