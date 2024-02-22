/** @jsxImportSource @emotion/react */

import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import * as S from "./style";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

// * emotion 장점: Class명을 알아서 만들어준다 / layout

// << style.js 만들어서 외부로 스타일파일 빼주기 >>
// const layout = css`
//     position: fixed;
//     top: 0;
//     left: 0;

//     width: 200px;
//     height: 100%;

//     background-color: black;
// `;

function SideBar() {

    const [isShow, setShow ] = useState(false);

    const menus = useMemo(() => [
        {
            id: 1,
            path: "/mypage",
            name: "마이페이지"
        },
        {
            id: 2,
            path: "/board",
            name: "게시판"
        },
        {
            id: 3,
            path: "/notice",
            name: "공지사항"
        }
        
    ],[]);
    
    return (
        <aside css={S.layout(isShow)} >
            <button css={S.toggleButoon} onClick={() => setShow(!isShow)} >
                {isShow ? <FaCaretLeft /> : <FaCaretRight />}
            </button>

            <ul>
                {menus.map(menu => 
                    <Link to={menu.path} key={menu.id}>
                        <li>{menu.name}</li>
                    </Link>)
                }
            </ul>
        </aside>
    );
}

export default SideBar;