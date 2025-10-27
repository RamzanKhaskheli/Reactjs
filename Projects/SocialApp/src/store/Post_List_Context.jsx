import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    const newpost = {
      userId: action.payload.uId,
      title: action.payload.title,
      body: action.payload.body,
      reactions: action.payload.reactions,
      tags: action.payload.hashtags,
    };
    newPostList = [...currPostList, newpost];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, defaultPost);

  const addPost = (uId, title, body, reactions, hashtags) => {
    console.log(`${uId} ${title} ${body} ${reactions} ${hashtags}`);
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        uId,
        title,
        body,
        reactions,
        hashtags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const defaultPost = [
  {
    id: 1,
    title: "Learning ReactJS",
    body: "Today I started learning ReactJS. Components and JSX are really interesting!",
    reactions: 45,
    userId: 101,
    tags: ["react", "frontend", "javascript"],
  },
  {
    id: 2,
    title: "Node.js Practice",
    body: "Created my first REST API using Express. Feeling awesome!",
    reactions: 30,
    userId: 102,
    tags: ["nodejs", "backend", "api"],
  },
  {
    id: 3,
    title: "CSS Tips",
    body: "Discovered how flexbox can make layout so much easier!",
    reactions: 18,
    userId: 103,
    tags: ["css", "webdesign", "frontend"],
  },
  {
    id: 4,
    title: "Database Setup",
    body: "Connected MongoDB with Node.js and successfully stored user data.",
    reactions: 27,
    userId: 104,
    tags: ["mongodb", "database", "nodejs"],
  },
  {
    id: 5,
    title: "JavaScript Challenge",
    body: "Solved 10 problems on array manipulation and improved my logic.",
    reactions: 50,
    userId: 105,
    tags: ["javascript", "coding", "practice"],
  },
];

export default PostListProvider;
