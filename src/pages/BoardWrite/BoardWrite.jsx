/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useMemo, useRef, useState } from 'react';

import ReactQuill from 'react-quill';
import { QUILL_MODULES } from '../../constants/QuillModules';
import { useInput, useMaxSizeValidateInput } from '../../hooks/inputHook';
import { useQuillInput } from '../../hooks/quillHook';
import { useNavigate } from 'react-router-dom';
import { useLoadList } from '../../hooks/boardListHook';

const layout = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 100px 120px;
    border: 1px solid #dbdbdb;
    padding: 50px 0px;
`;

const headerTitle = css`
    text-align: center;
    font-size: 40px;
    font-weight: 700;

    margin-bottom: 30px;
`;

const boardTitle = css`
    box-sizing: border-box;
    border: 1px solid #ccc;

    margin-bottom: 10px;
    width: 90%;
    padding: 10px;
    outline: none;
`;

const submitButton = css`
    box-sizing: border-box;
    border: 1px solid #ccc;
    background-color: white;

    margin-top: 50px;
    width: 90%;
    padding: 10px;

    font-weight: 600;

    cursor: pointer;
    &:hover {
        background-color: #fafafa;
    }
    &:active {
        background-color: #eee;
    }
`;

function BoardWrite() {

    const navigate = useNavigate();
    const [ inputValue, handleInputChange ] = useMaxSizeValidateInput(20);
    const [ quillValue, handleQuillValueChange ] = useQuillInput();

    //페이지가 열렸을 때
    const {boardList, lastId} = useLoadList();

    //작성하기 클릭했을 때
    const handleSubmitClick = () => {
        // const lastIndex = boardList.length - 1;
        // const lastId = lastIndex < 0 ? 0 : boardList[lastIndex].boardId;

        let newBoardList = [];

        for(let i = 0; i < 203; i++) {

            const board = {
                boardId: i + 1,
                boardTitle: inputValue + (i + 1),
                boardContent: quillValue
            };
    
            newBoardList = [...newBoardList, board];
        }


        localStorage.setItem("boardList", JSON.stringify(newBoardList));
        alert("글 작성 완료.");

        // 글 작성 완료하고 리스트로 페이지 전환 - navigate 사용
        navigate("/board/list");
    }



    return (
        <div css={layout}>
            <h1 css={headerTitle}>글 작성하기</h1>
            <input
                css={boardTitle}
                type="text"
                placeholder='제목을 입력하세요'
                onChange={handleInputChange}
                value={inputValue}
            />

            <ReactQuill style={{
                width: "90%",
                height: "400px"
            }}

            modules={QUILL_MODULES}
            onChange={handleQuillValueChange}
            />

            <button css={submitButton} onClick={handleSubmitClick}>작성하기</button>
        </div>
    );
}

export default BoardWrite;