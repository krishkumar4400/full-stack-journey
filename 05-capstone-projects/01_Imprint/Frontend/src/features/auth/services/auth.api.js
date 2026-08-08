import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/v1/auth",
  withCredentials: true,
});

async function login( email, password ) {
  try {
    const { data } = await api.post("/login", {
      email,
      password,
    });
    return data;
  } catch (error) {
    console.error(error);
    if(error.response) {
      console.error("Error : ", error.response.data.message);
      return { message: error.response.data.message ,
        success: false
      };
    }
  }
}

async function register(username, email, password) {
  try {
    const { data } = await api.post("/register", {
      username,
      email,
      password,
    });

    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getCurrentUser() {
  try {
    const { data } = await api.get("/user");
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export { login, register, getCurrentUser };
