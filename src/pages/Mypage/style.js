import { css } from "@emotion/react";

// export const box = css`
//     box-sizing: border-box;
//     border: 1px solid #dbdbdb;
//     margin: 10px;
//     width: 300px;
//     height: 300px;
// `;


export const layout = css`
    padding: 100px 30px 0px;

`;

export const profileHeader = css`
    box-sizing: border-box;
    margin: 0px auto 20px;
    padding: 30px;
    border: 1px solid #dbdbdb;
    width: 700px;
`;

export const title = css`
    margin-bottom: 50px;
    text-align: center;
    font-size: 30px;
    font-weight: 700;

`;

export const profileImg = css`

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0px auto 20px;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 50%;
    overflow: hidden;

    cursor: pointer;

    width: 200px;
    height: 200px;
    & > img {
        width: 100%;
    }
`;

export const nicknameLayout = css`

    display: flex;
    justify-content: center;
    margin-bottom: 20px;

`;

export const nickname = css`
    // 너비를 이미지 너비랑 같게
    width: 200px;

    box-sizing: border-box;

    border: none;
    outline: none;

    border-bottom: 2px solid #dbdbdb;
    padding: 5px 10px 0px;
    text-align: center;

    font-size: 18px;
    font-weight: 600;
    transition: background-color 0.3s ease-in-out;
    cursor: pointer;

    &:focus {
        border-bottom: 2px solid #bbb;
        background-color: #f9f3ff;
    }
`;

export const profileInputLayout = css`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    box-sizing: border-box;
    border: 1px solid #dbdbdb;

    margin: 0px auto 20px;
    width: 700px;
    padding: 10px;

`;

export const inputBox = css`
    margin-bottom: 10px;
    position: relative;


`;

// border에 라운드 줄려면 모든 border에 라운드 주기
export const profileInput = css`

    box-sizing: border-box;
    border: 1px solid #dbdbdb;

    width: 335px;
    padding: 20px 20px 10px;
    font-size: 16px;

    // 3번 칸 4번칸 마진 0으로 설정
    &:nth-of-type(3n), &:nth-of-type(4n) {
        margin: 0;
    }

    &:focus {
        outline: 2px solid #5dd6ff;
    }



    // + 사용해서 인접형제 label 상태변화
    & +label {
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        left: 23px;
        color: #333;
        font-weight: 600;

        // 부드럽게 애니메이션
        transition: all 0.2s ease-in-out;
    }

    // input에 placeholder가 안보이면 그때의 인접형제에 속성을 고정해라
    // placeholder에 스페이스 한칸 해놓고 클릭 시 placeholder에 스페이스가 없어지면서 상태변화
    &:focus +label, &:not(:placeholder-shown) +label {
        top: 13px;
        left: 23px;
        font-size: 11px;
    }
`;

export const buttonLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;

`;

// 버튼은 << padding >> 으로 너비랑 높이 맞춰야한다 (width/ height 넣지말기) / input 도 마찬가지
export const profileButton = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    padding: 10px 20px;
    width: 700px;
    height: 50px;

    background-color: white;
    font-size: 14px;
    font-weight: 600;

    cursor: pointer;

    &:hover {
        background-color: #fafafa;
    }

    &:active {
        background-color: #eeeeee;
    }
`;

