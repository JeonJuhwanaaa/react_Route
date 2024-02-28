/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { useMemo } from 'react';
import ReactQuill from "react-quill";

const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
`;

const textEditorLayout = css`
    width: 900px;
    height: 700px;
`;

function BoardEx() {

    // Quill : e 말고 value 넣는다 ->
    const handleQuillChange = (value) => {
        console.log(value);

    }

    const modules = useMemo(() => ({ toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        ['link', 'image', 'video', 'formula'],
      
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
      
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],
      
        ['clean']                                         // remove formatting button
    ]}),[]);


    return (
        <div css={layout}>
            <div css={textEditorLayout}>
                <ReactQuill style={{
                    height: "100%"
                }} onChange={handleQuillChange} modules={modules}/>
            </div>
        </div>
    );
}

export default BoardEx;

// react Quill 검색
// 공식사이트 -> https://quilljs.com/

// 1. npm i react-quill 설치
// 2. index.html 에 <link
//     rel="stylesheet"
//     href="https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css"
//   /> 넣기
// 3. import ReactQuill from "react-quill";

