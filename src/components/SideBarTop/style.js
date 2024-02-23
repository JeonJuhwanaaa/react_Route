import { css } from "@emotion/react";

export const layout = (isShow) => css`
    position: fixed;

    z-index: 99;

    display: flex;
    justify-content: center;
    align-items: center;
    
    top: ${isShow ? "0px" : "-80px"};
    right: 0;

    transition: top 0.2s ease-in-out;
    background-color: white;

    border: 1px solid #dbdbdb;
    width: 50%;
    height: 80px;

`;

export const toggleButoon = css`

    box-sizing: border-box;
    position: absolute;
    top: 100%;
    right: 10px;

    display: flex;
    align-items: center;
    justify-content: center;


    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border: 1px solid #dbdbdb;
    width: 35px;
    height: 15px;

    cursor: pointer;

    &:hover {
        background-color: #eee;
    }
    &:active {
        background-color: #ccc;
    }

`

export const menuList = css`
    
    display: flex;
    justify-content: space-evenly;

`;

export const menuItem = css`

    box-sizing: border-box;

    display: flex;
    justify-content: center;
    margin-right: 20px;

    border: 1px solid #eee;
    color: black;

    height: 40px;
    padding: 10px;

    
    font-size: 13px;
    text-decoration: none;

    cursor: pointer;

    &:hover {
        background-color: #eee;
    }
    &:active {
        background-color: #dbdbdb;
    }

`;