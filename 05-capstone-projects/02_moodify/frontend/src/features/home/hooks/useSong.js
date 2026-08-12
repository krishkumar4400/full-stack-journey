import { useContext } from "react";
import { getSong } from "../services/song.api.js";
import { SongContext } from "../song.context.jsx";

const useSong = () => {
  const { song, setSong, loading, setLoading } = useContext(SongContext);

  const handleGetSong = async ({ mood }) => {
    setLoading(true);
    const data = await getSong(mood);
    setSong(data.song);
    setLoading(false);
  };

  return {
    handleGetSong,
    loading,
    song,
  };
};

export default useSong;
