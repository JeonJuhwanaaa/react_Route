/** @jsxImportSource @emotion/react */

import * as S from "./style";

function RootLayout({ children }) {
    return (
        <>
            <div css={S.backgroundLayout}></div>
            <div css={S.layout}>
                { children }
            </div>
        </>
    );
}

export default RootLayout;


// 매개변수에 children을 넣으면 

// <Routes>
//     <Route path='/mypage' element={<>마이페이지</>} />
//     <Route path='/board' element={<>게시판</>} />
//     <Route path='/notice' element={<>공지사항</>} />
// </Routes>

// 가져오는거랑 같다