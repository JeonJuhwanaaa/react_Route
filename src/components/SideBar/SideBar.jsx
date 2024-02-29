/** @jsxImportSource @emotion/react */

import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import * as S from "./style";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MENUS } from "../../constants/menu";

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

    // const menus = useMemo(() => MENUS,[]);
    
    return (
        <aside css={S.layout(isShow)} >
            <button css={S.toggleButoon} onClick={() => setShow(!isShow)} >
                {isShow ? <FaCaretLeft /> : <FaCaretRight />}
            </button>

            <ul css={S.menuList}>
                {MENUS.map(menu => 
                    <Link css={S.menuItem} to={`${menu.path}${!menu.params ? "" : "?" + Object.entries(menu.params).map(([key, value]) => key + "=" + value).join("&")}`} key={menu.id} onClick={() => setShow(false)}>
                        <li>{menu.name}</li>
                    </Link>)
                }
            </ul>
        </aside>
    );
}

export default SideBar;