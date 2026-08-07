import { useState } from "react";
import { PostContext } from "./post.context";

export const PostContextProvider = ({ children }) => {
  const [feed, setFeed] = useState(null);
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null);

  return (
    <PostContext.Provider
      value={{ feed, loading, setLoading, post, setPost, setFeed }}
    >
      {children}
    </PostContext.Provider>
  );
};
