import React, { useContext, useRef } from "react";
import { PostList } from "../store/Post_List_Context";

const Form = () => {
  const { addPost } = useContext(PostList);
  const UserIdElement = useRef();
  const PostTitleElement = useRef();
  const PostBodyElement = useRef();
  const reactionElement = useRef();
  const hashtagElement = useRef();

  const handlesubmit = (e) => {
    e.preventDefault();
    const userId = UserIdElement.current.value;
    const PostTitle = PostTitleElement.current.value;
    const PostBody = PostBodyElement.current.value;
    const reactions = reactionElement.current.value;
    const hashtags = hashtagElement.current.value.split(" ");

    addPost(userId, PostTitle, PostBody, reactions, hashtags);
  };

  return (
    <form className="form" onSubmit={handlesubmit}>
      <div className="mb-3 ">
        <label htmlFor="userid" className="form-label">
          User Id
        </label>
        <input
          type="text"
          ref={UserIdElement}
          className="form-control"
          id="userid"
        />
      </div>
      <div className="mb-3 ">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={PostTitleElement}
          className="form-control"
          id="title"
        />
      </div>
      <div className="mb-3 ">
        <label htmlFor="content" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={PostBodyElement}
          rows={4}
          className="form-control"
          id="content"
        />
      </div>

      <div className="mb-3 ">
        <label htmlFor="reactions" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          ref={reactionElement}
          className="form-control"
          id="reactions"
        />

        <div className="mb-3 ">
          <label htmlFor="hashtags" className="form-label">
            HashTags
          </label>
          <input
            type="text"
            ref={hashtagElement}
            className="form-control"
            id="hashtags"
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default Form;
