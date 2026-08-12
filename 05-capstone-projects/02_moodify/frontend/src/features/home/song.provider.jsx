import { useState } from "react";
import { SongContext } from "./song.context.jsx";



export const SongContextProvider = ({children}) => {

    const [song, setSong] = useState({
        title: "test title 1",
        url: "http://localhost:6000/song1",
        posterUrl: "http://localhost:6000/poster1",
        mood: "happy"
    });

    const [loading, setLoading] = useState(false);

    return (
        <SongContext.Provider value={{song, setSong, loading, setLoading}}>
            {
                children
            }
        </SongContext.Provider>
    )
}