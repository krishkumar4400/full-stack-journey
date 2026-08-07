import { useRef, useState } from "react";
import { usePost } from "../hooks/usePost";
import {useNavigate} from 'react-router';

const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const mediaRef = useRef(null);
  const { handleUploadPost, loading } = usePost();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const file = mediaRef.current.files[0];
    await handleUploadPost(caption, file);
    navigate('/');
  };

  if (loading) {
    return <h1>Creating Post ..... </h1>;
  }

  return (
    <div>
      <h1>Create Post</h1>
      <main className="create-post">
        <div className="form-container">
          <form onSubmit={submitHandler}>
            <label htmlFor="media">Select Image</label>
            <input
              ref={mediaRef}
              required
              type="file"
              name="media"
              id="media"
              hidden
            />
            <input
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              required
              type="text"
              name="caption"
              id="caption"
              placeholder="Enter post caption"
            />
            <button className="button primary-button">Create Post</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CreatePost;
