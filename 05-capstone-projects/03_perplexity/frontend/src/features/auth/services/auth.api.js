import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:3000/api/v1/auth`,
  withCredentials: true,
});

async function register({ name, email, password }) {
  try {
    const { data } = await api.post("/register", {
      username: name,
      email,
      password,
    });
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
}

async function login({ email, password }) {
  try {
    const { data } = await api.post("/login", {
      email,
      password,
    });

    console.log("in api");
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function logout() {
  try {
    const { data } = await api.post("/logout");

    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getUser() {
  try {
    const { data } = await api.get("/me");
    // console.log(data);

    return data;
  } catch (error) {
    console.error(error);
  }
}

export { register, login, logout, getUser };
