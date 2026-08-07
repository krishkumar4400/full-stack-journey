import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3000/api/v1/posts",
    withCredentials: true 
});


const getFeed = async () => {
    try {
        const {data} = await api.get("/feed");
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export { getFeed };