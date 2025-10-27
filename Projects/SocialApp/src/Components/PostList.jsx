import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post_List_Context";

const PostList = () => {
  const { postList } = useContext(PostListData);

  return (
    <>
      {postList.length === 0 ? (
        <h1>There is No Post</h1>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "50px",
            margin: "20px 0 0 20px",
          }}
        >
          {postList.map((post) => (
            <Post key={post.id} posts={post} />
          ))}
        </div>
      )}
    </>
  );
};

export default PostList;
