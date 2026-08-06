import { useState } from "react";
import "../style/form.scss";
import { Link } from "react-router";
import toast from "react-hot-toast";
import { useAuth } from "../hooks/useAuth.js";
import { useNavigate } from "react-router";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const { handleLogin, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      console.log(user);
      handleLogin(user.email, user.password).then((res) => {
        console.log(res);
        if (res.success) {
          toast.success(res.message);
          navigate("/");
        } else {
          toast.error(res.message);
        }
      });
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
            <button className="button primary-button">Login</button>
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
