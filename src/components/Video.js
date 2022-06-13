import React from "react";

function Video(video) {
  return (
    <div>
      <h1>{video.video.title}</h1>
      <p>
        {video.video.views} Views | Uploaded {video.video.createdAt}
      </p>
    </div>
  );
}

export default Video;
