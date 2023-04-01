import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => {
        setComments(response.data);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
      console.log(`Getting comments for post ${postId}`);
  }, [postId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Comments</h2>
      <ol>
        {comments.map(comment => (
          <li key={comment.id}>
            {comment.body}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Comments;





