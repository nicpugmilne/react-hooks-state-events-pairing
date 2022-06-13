import React, { useState } from "react";

function Comments({ comments }) {
  let [hidden, setHidden] = useState(false);

  function handleHideCommentsClick() {
    setHidden((hidden = !hidden));
  }

  function handleUpvote(e) {
    let text = e.target.textContent;
    let voteCount = [];
    text.includes(" ") ? (voteCount = text.split(" ")) : (voteCount = 0);
    voteCount[0] > 0
      ? (e.target.textContent = `${parseInt(voteCount[0]) + 1}  👍`)
      : (e.target.textContent = "1 👍");
  }

  function handleDownvote(e) {
    let text = e.target.textContent;
    let voteCount = [];
    text.includes(" ") ? (voteCount = text.split(" ")) : (voteCount = 0);
    voteCount[0] > 0
      ? (e.target.textContent = `${parseInt(voteCount[0]) + 1}  👎`)
      : (e.target.textContent = "1 👎");
  }

  const commentsToDisplay = comments.map((comment) => {
    return (
      <div key={comment.id}>
        <p>
          <b>{comment.user}</b>
        </p>
        <p>{comment.comment}</p>
        <button onClick={handleUpvote}>👍</button>
        <button onClick={handleDownvote}>👎</button>
      </div>
    );
  });

  return (
    <div>
      <button onClick={handleHideCommentsClick}>
        {hidden ? "Show Comments" : "Hide Comments"}
      </button>
      {hidden ? (
        <div></div>
      ) : (
        <div>
          <h2>{comments.length} Comments</h2>
          <div>{commentsToDisplay}</div>
        </div>
      )}
    </div>
  );
}

export default Comments;
