import { useContext, useEffect, useRef, useState } from "react";
import { SongContext } from "../song.context.jsx";
import useSong from "../hooks/useSong.js";

const playlist = [
  {
    title: "Morning Mood",
    url: "http://localhost:6000/song1",
    posterUrl: "http://localhost:6000/poster1",
    mood: "happy",
  },
  {
    title: "Evening Chill",
    url: "http://localhost:6000/song2",
    posterUrl: "http://localhost:6000/poster2",
    mood: "relaxed",
  },
  {
    title: "Focus Flow",
    url: "http://localhost:6000/song3",
    posterUrl: "http://localhost:6000/poster3",
    mood: "focused",
  },
];


const Player = () => {
  const { song, setSong, loading } = useSong();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);

  useEffect(() => {
    setSong(playlist[currentIndex]);
  }, [currentIndex, setSong]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.playbackRate = playbackRate;
  }, [playbackRate]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setProgress(audio.currentTime);
    };
    const updateDuration = () => {
      setDuration(audio.duration || 0);
    };
    const handleEnded = () => {
      handleNext();
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [song]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.load();
    if (isPlaying) {
      audioRef.current.play().catch(() => null);
    }
  }, [song, isPlaying]);

  const handleTogglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => null);
    }
    setIsPlaying(!isPlaying);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? playlist.length - 1 : prev - 1));
    setIsPlaying(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  };

  const formattedTime = (seconds) => {
    if (!seconds || Number.isNaN(seconds)) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${secs}`;
  };

  return (
    <div className="w-full max-w-3xl p-6 mx-auto bg-slate-900/90 rounded-3xl border border-slate-700 shadow-xl text-white">
      <div className="grid gap-5 md:grid-cols-[180px_1fr] items-center">
        <img
          src={song.posterUrl}
          alt={song.title}
          className="w-full h-44 rounded-3xl object-cover border border-slate-700"
        />

        <div className="space-y-4">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
              Now playing
            </p>
            <h2 className="mt-2 text-3xl font-semibold">{song.title}</h2>
            <p className="text-slate-400">Mood: {song.mood}</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm text-slate-400">
              <span>{formattedTime(progress)}</span>
              <span>{formattedTime(duration)}</span>
            </div>
            <input
              type="range"
              min="0"
              max={duration || 100}
              value={progress}
              onChange={(event) => {
                const value = Number(event.target.value);
                if (audioRef.current) {
                  audioRef.current.currentTime = value;
                }
                setProgress(value);
              }}
              className="w-full accent-cyan-400"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <button
                className="px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 transition"
                onClick={handlePrev}
                disabled={loading}
              >
                ◀ Prev
              </button>
              <button
                className="px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition"
                onClick={handleTogglePlay}
                disabled={loading}
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
              <button
                className="px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 transition"
                onClick={handleNext}
                disabled={loading}
              >
                Next ▶
              </button>
            </div>

            <div className="flex items-center gap-3">
              <label className="text-sm text-slate-400">Speed</label>
              <select
                className="rounded-full bg-slate-800 px-3 py-2 text-sm text-white border border-slate-700"
                value={playbackRate}
                onChange={(event) =>
                  setPlaybackRate(Number(event.target.value))
                }
              >
                <option value={0.75}>0.75x</option>
                <option value={1}>1x</option>
                <option value={1.25}>1.25x</option>
                <option value={1.5}>1.5x</option>
                <option value={2}>2x</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <audio ref={audioRef} className="hidden">
        <source src={song.url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Player;
