import { styled } from "styled-components";

export const Button = styled.button`
    padding: 10px;
    border: none;
    border-radius: 15px;
    font-size: 16px;
    background-color: rgba(54,54,54);
    color: white;
    width: 40%;
    height: 5%;
    cursor: pointer;
    transition: background-color 0.3s ease;
    box-sizing: border-box;

    &:hover {
    background-color: #0056b3;
  }
    
`