import { useState } from "react";
import "../style/form.scss";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { register } from "../services/auth.api";

const Register = () => {
  const [user, setUser] = useState({ username: "", email: "", password: "" });

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      console.log(user);
      const data = await register(user.username, user.email, user.password);

      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
      console.log(data);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setUser({ username: "", email: "", password: "" });
    }
  };
  return (
    <main>
      <div className="form-container">
        <h1>Sign up</h1>
        <form onSubmit={submitHandler}>
          <div>
            <input
              required
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              type="text"
              placeholder="Enter your username"
              name="username"
            />
          </div>
          <div>
            <input
              required
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              type="email"
              placeholder="Enter your email"
              name="email"
            />
          </div>
          <div>
            <input
              required
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="password"
              placeholder="Enter your password"
              name="password"
            />
          </div>
          <div>
            <button>Sign up</button>
          </div>
          <div>
            <p>
              Already have an account ? <Link to={"/login"}>Login</Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;
