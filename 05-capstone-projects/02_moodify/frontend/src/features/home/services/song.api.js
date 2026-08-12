import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:3000/api/v1/songs`,
  withCredentials: true,
});

async function addSong(title, image) {
  try {
    const formData = new FormData();
    formData.append();
    const { data } = await api.post("/song");
  } catch (error) {}
}

async function getSong(mood) {
  try {
    const { data } = await api.get("/song?mood=" + mood);
    return data;
  } catch (error) {}
}

export { addSong, getSong };
