import SingleComment from "./SingleComment";

const CommentList = ({ commentsFromList }) => {
  return (
    <>
      {commentsFromList.map((comment) => (
        <SingleComment key={comment.asin} comment={comment.comment} />
      ))}
    </>
  );
};
export default CommentList;
