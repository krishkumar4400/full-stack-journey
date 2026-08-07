import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/v1/posts",
  withCredentials: true,
});

const getFeed = async () => {
  try {
    const { data } = await api.get("/feed");
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

const createPost = async (caption, file) => {
  const formData = new FormData();
  formData.append("caption", caption);
  formData.append("media", file);
  try {
    const { data } = await api.post("/", formData);
    return data;
  } catch (error) {
    console.error(error);
  }
};

const likePost = async (postId) => {
  try {
    const { data } = await api.post(`/like/${postId}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
const unLikePost = async (postId) => {
  try {
    const { data } = await api.post(`/unlike/${postId}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { getFeed, createPost, likePost, unLikePost };
