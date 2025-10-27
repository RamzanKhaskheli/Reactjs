import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/Post_List_Context";
const Post = ({ posts }) => {
  const { deletePost } = useContext(PostList)
  return (
    <div className="card" style={{ width: "23rem" }}>
      <div className="card-body">
        <h5 className="card-title">{posts.title}</h5>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(posts.id)}>
          <MdDelete />
        </span>
        <p className="card-text">{posts.body}</p>
        {posts.tags.map((tag, index) => (
          <span className="badge text-bg-primary" key={index}  >
            {tag}
          </span>
        ))}

        <div className="alert alert-success" role="alert">
          This post has been reacted by {posts.reactions} people.
        </div>
      </div>
    </div>
  );
};

export default Post;
