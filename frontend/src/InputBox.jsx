import React from "react";
import styled from "styled-components";
import searchIcon from "./images/searchIcon.png";

const InputBox = ({value, onChange, onSearch, disabled = false}) => {
  return (
    <StyledWrapper>
      <div className="InputContainer">
        <input
          placeholder="Eg. White t-shirt"
          className="input"
          type="text"
          value={value}
          onChange={onChange}
        />
        <button className="btn" type="button" onClick={onSearch} disabled={disabled}>
          <img src={searchIcon} alt="search" />
        </button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .InputContainer {
    width: 340px;
    height: 55px;
    display: flex;
    align-items: center;
    padding: 6px;
    background: linear-gradient(135deg, #e3d5ff, #ffe7e7);
    border-radius: 35px;
    box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  }

  .input {
    flex: 1;
    height: 100%;
    border: none;
    outline: none;
    border-radius: 30px;
    padding: 0 16px;
    font-size: 14px;
  }

  .btn {
    width: 45px;
    height: 45px;
    border: none;
    border-radius: 50%;
    background: white;
    margin-left: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn img {
  width: 26px;
  }
`;

export default InputBox;