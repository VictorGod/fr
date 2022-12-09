import React from 'react';
import styled from "styled-components";

const Button = ({text}) => {
    return (
        <ButtonItem>{text}</ButtonItem>
    );
};

export default Button;

const ButtonItem = styled.button`
    margin-top: 15px;
    margin-bottom: 10px;
    background: ${({ theme }) => theme.buttonBackground};
    border: 1px solid ${({ theme }) => theme.buttonBackground};
    color: ${({ theme }) => theme.white};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10.5px 22px;
    font-size: 18px;
    line-height: 22px;
    cursor: pointer;
    width: 380px;
    border-radius: 10px;
    &:hover{
        background: ${({ theme }) => theme.white};
        color: ${({ theme }) => theme.buttonBackground};
        transition: .3s;
    }
`