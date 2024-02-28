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