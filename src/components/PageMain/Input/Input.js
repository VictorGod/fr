import React from 'react';
import styled from "styled-components";

const Input = () => {
    return (
        <InputItem type='text'/>
    );
};

export default Input;

const InputItem = styled.input`
    cursor: text;
    padding: 15px;
    background: ${({ theme }) => theme.inputBackground};
    border: 1px solid ${({ theme }) => theme.inputBorder};
    border-radius: 10px;
    margin: 3px 0px 15px 0px;
    width: 90%;
    z-index: 10;
    outline: none;
`