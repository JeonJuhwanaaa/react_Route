import { css } from "@emotion/react";

//isShow 는 참/거짓 값을 가진다
export const layout = (isShow) => css`

    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: ${isShow ? "0px" : "-300px"};

    border-right: 1px solid #dbdbdb;

    width: 300px;
    height: 100%;

    transition: left 0.5s ease-in-out;
    background-color: white;

    box-shadow: 1px 0px 2px #00000022;
    
`;

export const toggleButoon = css`
    box-sizing: border-box;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: -15px;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border: 1px solid #dbdbdb;
    width: 15px;
    height: 50px;

    background-color: white;
    cursor: pointer;
    &:hover {
        background-color: #eee;
    }
    &:active {
        background-color: #ccc;
    }
`;