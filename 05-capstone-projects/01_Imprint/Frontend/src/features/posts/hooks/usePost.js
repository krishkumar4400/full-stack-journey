import { PostContext } from "../post.context.jsx";
import {
  createPost,
  getFeed,
  likePost,
  unLikePost,
} from "../services/post.api.js";
import { useContext, useEffect } from "react";

export const usePost = () => {
  const context = useContext(PostContext);
  const { feed, loading, setLoading, post, setFeed } = context;

  const handleGetFeed = async () => {
    setLoading(true);
    const data = await getFeed();
    console.log(data);
    setFeed(data.posts);
    setLoading(false);
  };

  const handleUploadPost = async (caption, file) => {
    setLoading(true);
    const data = await createPost(caption, file);
    setFeed([data.post, ...feed]);
    setLoading(false);
  };

  const handlePostLike = async (postId) => {
    const data = await likePost(postId);
    await handleGetFeed();
    console.log(data);
  };
  const handlePostUnLike = async (postId) => {
    const data = await unLikePost(postId);
    await handleGetFeed();
    console.log(data);
  };

  useEffect(() => {
    handleGetFeed();
  }, []);

  return {
    handleGetFeed,
    loading,
    feed,
    post,
    handleUploadPost,
    handlePostLike,
    handlePostUnLike,
  };
};
