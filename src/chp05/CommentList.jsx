import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "마현빈",
        comment: "집 가고 싶다",
    },
    {
        name: "마빈",
        comment: "집가고싶다",
    },
    {
        name: "현빈",
        comment: "집 가 고 싶 다",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name}
                    comment={comment.comment} />
                );
            })}

        </div>
    );
}

export default CommentList;