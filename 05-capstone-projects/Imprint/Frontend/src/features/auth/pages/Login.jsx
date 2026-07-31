import { useState } from "react";
import "../style/form.scss";
import { Link } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      console.log(user);
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/auth/login",
        {
          email: user.email,
          password: user.password,
        },
        {
          withCredentials: true,
        },
      );
      console.log(data);
      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setUser({ email: "", password: "" });
    }
  };
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
          <div>
            <input
              required
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              name="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <input
              required
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <button>Login</button>
          </div>
          <div>
            <p>
              Don't have an account ? <Link to={"/register"}>Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
