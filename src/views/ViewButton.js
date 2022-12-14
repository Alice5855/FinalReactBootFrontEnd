import React from "react";
import { Link } from "react-router-dom";

const ViewButton = () => {
    return (
        <>
            <Link to="/Insert">
                <button>게시글 등록</button>
            </Link>
            <Link to="/View">
                <button>최근 게시글 보기</button>
            </Link>
            <Link to="/Update">
                <button>최근 게시글 수정</button>
            </Link>
            <Link to="/Delete">
                <button>최근 게시글 삭제</button>
            </Link>
        </>
    );
};
export default ViewButton;