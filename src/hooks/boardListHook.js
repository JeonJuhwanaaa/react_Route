import { useMemo } from "react";

export function useLoadList() {

    const boardList = useMemo(() => {
        const IsBoardList = localStorage.getItem("boardList");

        // localStorage를 가져왔을 때 아무것도 없을 때 []빈 배열로 리턴 , 있다면 JSON으로 변환해서 리턴 
        return !IsBoardList ? [] : JSON.parse(IsBoardList);
    },[]);

    const lastIndex = boardList.length - 1;
    const firstId = lastIndex < 0 ? 0 : boardList[0].boardId;
    const lastId = lastIndex < 0 ? 0 : boardList[lastIndex].boardId;
    const size = boardList.length;

    return { boardList, size, firstId, lastId };
}

export function useLoadListByPageNumber(page) {

    const pageNumber = parseInt(page);

    const loadBoardList = useMemo(() => {
        const IsBoardList = localStorage.getItem("boardList");
        const loadBoardList = !IsBoardList ? [] : JSON.parse(IsBoardList);
        return loadBoardList;

    },[page]);
    
    const boardList = loadBoardList.filter((board, index) => index > (pageNumber * 10) - 11 && index < pageNumber * 10);

    // 주소창에 띄어지는 page숫자는 String 형식이어서 형변환이 필요하기때문에 startPage로 넘길 땐 parse 해줘야한다
    const size = loadBoardList.length;

    // 제일마지막 페이지 번호
    const totalPageCount = Math.floor(size % 10 === 0 ? size / 10 : (size / 10) + 1);
    // 페이지 첫번째 번호 1, 6, 11, ... 
    const startPageNumber = pageNumber % 5 === 0 ? pageNumber - 4 : (pageNumber - (pageNumber % 5)) + 1;
    const endPageNumber = startPageNumber + 4  <= totalPageCount ? startPageNumber + 4 : totalPageCount;

    let pageNumbers = useMemo(() => {

        let newPageNumbers = [];

        for(let i = startPageNumber; i <= endPageNumber; i++) {
            newPageNumbers = [...newPageNumbers, i];
        }
        return newPageNumbers;

    },[startPageNumber]);
    

    // const lastIndex = boardList.length - 1;
    // const firstId = lastIndex < 0 ? 0 : boardList[0].boardId;
    // const lastId = lastIndex < 0 ? 0 : boardList[lastIndex].boardId;

    return { boardList, size, pageNumbers, totalPageCount, startPageNumber };
}