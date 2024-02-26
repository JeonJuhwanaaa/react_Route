/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useEffect, useRef, useState } from "react";
import { storage } from '../../configs/firebase/firebaseConfig';
import { Line } from 'rc-progress';
import { v4 as uuid } from "uuid";

const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px;
`;

const imageLayout = css`

    display: flex;
    justify-content: center;
    align-items: center;

    width: 300px;
    height: 300px;

    border: 1px solid #dbdbdb;
    margin: 20px;
    overflow: hidden;

    & > img {
        width: 100%;
    }
`;

function ImageEx() {

    const [urls, setUrls] = useState([]);
    const [ uploadFiles, setUploadFiles ] = useState([]);
    const [previews, setPreviews] = useState([]);
    const [progressPercent, setProgressPercent] = useState("");
    
    // Ref: 연쇄 작용
    const imgFileRef = useRef();

    // 비어있으면 [](빈 값) 값이 있다면 
    useEffect(() => {
        setUrls(!localStorage.getItem("urls") ? [] : JSON.parse(localStorage.getItem("urls")));
    },[]);

    const handleImgBring = (e) => {
        
        // // << 이미지 1개 들고오기 >>--------------------------------

        // // 이미지가 읽히는지 확인
        // console.log(e.target.files);

        // // 읽힌 이미지를 화면으로 가져오기
        // // 1번
        // const fileReader = new FileReader();
        
        // // 3번 - 2번의 이벤트가 발생하면 result값이 setImage안에 넣어주기
        // (onload: 이미지가 성공적으로 로드되면 e.target.result의 값이 setImage 로 넣어주기)
        // fileReader.onload = (e) => {
        //     setImage(e.target.result);
        // };
        
        // // 2번
        //  readAsDataURL: 파일의 url을 읽어드린다
        // fileReader.readAsDataURL(e.target.files[0]);

// -----------------------------------------------------------------------------------

        // // << 이미지 여러개 들고오기 >>--------------------------------

        // 비동기상태니깐 여러개 선택하고 불러와도 한개만 불러온다 -> promise 정의해주기
        // fileReader.onload = (e) => {
        //     console.log(e.target.result);
        //     setPreviews([...previews, e.target.result]);
        // }

        const files = Array.from(e.target.files);

        if(files.length === 0) {
            imgFileRef.current.value = "";
            return;
        }

        setUploadFiles(files);

        // 여러개 promise들을 담는다
        let promises = [];

        // promises = e.target.files.map();
        promises = files.map(file => new Promise((resolve) => {
                
            const fileReader = new FileReader();
            
            fileReader.onload = (e) => {
                resolve(e.target.result);
            }
            fileReader.readAsDataURL(file);
        }));

        // 아래 코드를 위 코드로 map사용해서 변경 - 같은 코드임

        // for(let file of e.target.files) {
        //     console.log(e.target.file);
        
        //     promises = [...promises, new Promise((resolve) => {
                
        //         const fileReader = new FileReader();
                
        //         fileReader.onload = (e) => {
        //             console.log(e.target.result);
        //             resolve(e.target.result);
        //         }
        //         fileReader.readAsDataURL(file);
        //     })];
        // }


        // 기존의 promises 을 하나씩 꺼내서 결과물만 들고오기
        // **** promise.all 을 쓰면 동기가 된다
        Promise.all(promises)
        .then(result => {
            console.log(result);      
            setPreviews(result);
        });
    };

    const handleImageUpload = () => {

        const file = uploadFiles[0];
        console.log(uploadFiles);

        // 파일이름을 고유값으로(중복불가) - uuid사용
        const storageRef = ref(storage, `files/test/${uuid()}_${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        

        // "state_changed" - default 값 / 상태가 바뀌면은 ~
        uploadTask.on(
            "state_changed",
            // 업로드할 때
            // 현재 업로드가 얼마나 됐는지 % 로 보여주기
            (snapshot) => {
                setProgressPercent(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100))
            },
            // 오류가 생길 때
            (error) => {},
            // 업로드가 되고나서 후처리하는 곳
            () => {
                // getDownloadURL: url을 다운로드하겠다
                // 비동기
                
                getDownloadURL(storageRef).then(url => {
                    localStorage.setItem("urls",urls);
                    setUrls(urls);
                    setPreviews([]);
                })
            }
        );
    }

    return (
        <div css={layout} >
            {urls.map(url =>
                <div css={imageLayout}>
                    <img src={url} alt="" />
                </div>
            )}

            {previews.map((previews, index) =>
                <>
                    <div key={index} css={imageLayout} >
                        <img src={previews} alt="" />
                    </div>
                    <Line percent={progressPercent} strokeWidth={4} strokeColor={"#adc0ff"}/>
                </>
            )}
            <input style={{display: "none"}} type="file" multiple={true} ref={imgFileRef} onChange={handleImgBring} />
            <button onClick={() => imgFileRef.current.click()}>이미지 불러오기</button>
            <button onClick={handleImageUpload}>이미지 업로드</button>
        </div>
    );
}

export default ImageEx;