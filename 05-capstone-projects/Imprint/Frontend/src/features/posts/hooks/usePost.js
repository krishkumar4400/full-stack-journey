import { PostContext } from "../post.context.jsx";
import { getFeed } from "../services/post.api.js";
import { useContext } from "react";

export const usePost = () => {
  const context = useContext(PostContext);
  const { feed, loading, setLoading, post, setPost, setFeed } = context;

  const handleGetFeed = async () => {
    setLoading(true);
    const data = await getFeed();
    console.log(data);
    setFeed(data.posts);
    setLoading(false);
  };

  return {
    handleGetFeed,
    loading,
    feed,
    post,
  };
};
