import React from "react";
import Player from "../components/Player.jsx";
import useSong from "../hooks/useSong.js";
import FaceExpression from "../../expression/components/FaceExpression.jsx";

const Home = () => {
  const { handleGetSong } = useSong();
  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <FaceExpression onClick={(expression) => handleGetSong({mood: expression})} />
        <Player />
      </div>
    </div>
  );
};

export default Home;
