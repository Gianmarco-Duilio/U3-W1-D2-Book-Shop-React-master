import SingleComment from "./SingleComment";

const CommentList = ({ commentsFromList }) => {
  return (
    <>
      {commentsFromList.map((comment) => (
        <div className="text-center">
          <h5>{comment.author} </h5>
          <p>{comment.rate}</p>
          <p>{comment.comment}</p>
        </div>
      ))}
    </>
  );
};
export default CommentList;
