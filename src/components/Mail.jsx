import React from "react";
import styled from "styled-components";

const Mail = () => {
  return (
    <Div>
      <div className="mail">
        <h2 className="mailTitle"> Save time,save money</h2>
        <span className="mailDesc">
          Sign up and we'll send the best deals to you{" "}
        </span>
        <div className="mailInput">
          <input type="text" placeholder="Your Email" />
          <button> Subscribe</button>
        </div>
      </div>
    </Div>
  );
};

const Div = styled.div`
  .mail {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #003580;
    padding: 50px;
    margin-top: 50px;
    color: #fff;
    gap: 20px;

    .mailTitle {
      font-size: 2rem;
    }

    .mailInput>input {
      padding: 22px;
      margin-right: 20px;
      width: 300px;
      height: 30px;
      border: none;
      outline: none;
    }
    .mailInput>button {
      border: none;
      padding: 3px 10px;
      background-color: #0071bc;
      color: #fff;
      height: 50px;
      font-weight: bold;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;
export default Mail;
