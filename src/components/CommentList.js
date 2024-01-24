import Comment from "./Comment";

export default function CommentList({comments}) {
    const commentList = comments.map(comment => {
        return <Comment comment={comment} />
    })

    return (
        <div className="commentList" style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: "20px",
        }}>
            {commentList}
        </div>
    )
}
