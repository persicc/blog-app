"use client";

import useComments from "@/hooks/useComments";
import React, { useEffect, useState } from "react";

function CommentSection({ blogId }) {
  const { addComment, getComments } = useComments();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(null);

  useEffect(() => {
    const getCommentList = async () => {
      const { data } = await getComments(blogId);
      setComments(data);
    };
    getCommentList();
  }, []);

  return (
    <div>
      <h2>Write comments</h2>
      <input
        type="text"
        placeholder="Write comment"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />

      <button onClick={() => addComment(blogId, comment)}>Submit</button>
      <div>
        {comments?.map((comment) => (
          <div key={comment.id}>
            <p>
              {comment.users.email} {comment.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentSection;
