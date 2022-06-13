import video from "../data/video.js";
import LikeButton from "./LikeButton.js";
import Video from "./Video.js";
import Comments from "./Comments.js";
import { useState } from "react";

function App() {
  const comments = video.comments;
  const originalUpvotes = video.upvotes;
  const originalDownvotes = video.downvotes;
  const [upvotes, setUpvotes] = useState(originalUpvotes);
  const [downvotes, setDownvotes] = useState(originalDownvotes);

  function handleUpClick() {
    setUpvotes(parseInt(upvotes + 1));
  }

  function handleDownClick() {
    setDownvotes(parseInt(downvotes + 1));
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <Video video={video} />
      <LikeButton
        upvotes={upvotes}
        downvotes={downvotes}
        onUpvote={handleUpClick}
        onDownvote={handleDownClick}
      />
      <Comments comments={comments} />
    </div>
  );
}

export default App;
