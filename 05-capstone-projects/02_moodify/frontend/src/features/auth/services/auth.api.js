import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:8000/api/v1/auth`,
  withCredentials: true,
});

async function loginUser(email, password) {
  try {
    const { data } = await api.post("login", {
      email,
      password,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
}

async function registerUser(username, email, password) {
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

async function logoutUser() {
  try {
    const { data } = await api.post("/logout");
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getUser() {
  try {
    const { data } = await api.get("user");
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getAuthState() {
  try {
    const { data } = await api.get("/is-auth");
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export { loginUser, registerUser, logoutUser, getUser, getAuthState };
