import { css } from "@emotion/react";

export const backgroundLayout = css`

    position: fixed;
    transform: translateX(-50%);
    top: 0;
    left: 50%;
    z-index: -1;
    width: 1000px;
    height: 100vh;
    background-color: white;

`;

// 박스가 많은데 스크롤이 안생긴다면 overflow-y: auto 주면 스크롤이 생긴다
// height에 vh -> 100%를 꽉채우고 넘으면 스크롤
// z-index 에 -1을 주면 제일 하위로 된다


export const layout = css`

    margin: 0px auto;
    width: 1000px;


`;