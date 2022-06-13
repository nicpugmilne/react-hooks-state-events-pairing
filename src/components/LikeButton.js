import React from "react";

function LikeButton({ upvotes, downvotes, onUpvote, onDownvote }) {
  return (
    <div>
      <button onClick={onUpvote}>{upvotes} 👍</button>
      <button onClick={onDownvote}>{downvotes}👎</button>
    </div>
  );
}

export default LikeButton;
