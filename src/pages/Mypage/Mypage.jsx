/** @jsxImportSource @emotion/react */

import * as S from "./style";
import logo512 from "./logo512.png";
import { useRef, useState } from "react";

function Mypage(props) {

    const [ preview, setPreview] = useState("");

    // 이미지를 누르면 input안에 ref={imgFileRef} 이 실행
    const imgFileRef = useRef();

    const handleImgFileChange = (e) => {
        const fileReader = new FileReader();

        // 취소 눌렀을 때 빠져나가기
        if(e.target.files.length === 0) {
            return;
        }

        // 이미지 교체
        fileReader.onload = (e) => {
            setPreview(e.target.result);
        };

        // readAsDataURL -> e.target.files[0] 이 데이터 정보를 그대로 읽음 / readAsDataURL 호출하면 위 onload 실행
        // e.target.files -> file 타입일때만 files 를 참조
        fileReader.readAsDataURL(e.target.files[0]);
    }

    return (
        <div css={S.layout}>

            <div css={S.profileHeader}>
                <h1 css={S.title}> 마이페이지</h1>

                <div css={S.profileImg} onClick={() => imgFileRef.current.click()}> 
                    <img src={preview} alt="" />
                    <input style={{display: "none"}} type="file" ref={imgFileRef} onChange={handleImgFileChange}/>
                </div>

                <div css={S.nicknameLayout}>
                    <input css={S.nickname} type="text" maxLength={20}/>
                </div>
            </div>

            <div css={S.profileInputLayout}>
                <div css={S.inputBox}>
                    <input css={S.profileInput} id="name" type="text" placeholder=" " />
                    <label htmlFor="name">성명</label>
                </div>
                <div css={S.inputBox}>
                    <input css={S.profileInput} id="birth" type="text" placeholder=" "/>
                    <label htmlFor="birth">생년월일</label>
                </div>
                <div css={S.inputBox}>
                    <input css={S.profileInput} id="phone" type="text" placeholder=" "/>
                    <label htmlFor="phone">연락처</label>
                </div>
                <div css={S.inputBox}>
                    <input css={S.profileInput} id="address" type="text" placeholder=" "/>
                    <label htmlFor="address">주소</label>
                </div>
            </div>


            <div css={S.buttonLayout}>
                <button css={S.profileButton}>수정하기</button>
            </div>

        </div>
    );
}

export default Mypage;

// maxLength -> 글자수 제한