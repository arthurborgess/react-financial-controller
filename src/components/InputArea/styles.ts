import styled from "styled-components";

export const Container = styled.form`
    background-color: #FFF;
    box-shadow: 0 0 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    align-items: center;

    input, select {
        width: 20%;
        margin-right: 20px;
        height: 30px;
        text-indent: 5px;
        border-radius: 5px;
        border: 1px solid #CCC;
    }
    button {
        flex: 1;
        height: 30px;
        border-radius: 5px;
        border: none;
        color: #FFF;
        background-color: darkblue;
    }
    button, select {
        cursor: pointer;
    }
`;
