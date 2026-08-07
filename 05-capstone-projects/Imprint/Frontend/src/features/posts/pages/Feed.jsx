import React, { useEffect } from "react";
import { usePost } from "../hooks/usePost.js";
import Navbar from "../../shared/components/Navbar.jsx";

const Feed = () => {
  const { feed, handleGetFeed, loading } = usePost();

  useEffect(() => {
    handleGetFeed();
  }, []);

  if (loading || !feed) {
    return <h1>Loading .....</h1>;
  }

  return (
    <div>
      <Navbar/>
      <div className="post-container">
        <div className="post">
          <div className="profile"></div>
          <div className="media"></div>
          <div className="caption"></div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
