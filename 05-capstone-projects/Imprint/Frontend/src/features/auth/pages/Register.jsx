import { useState } from "react";
import "../style/form.scss";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
  const [user, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { loading, handleRegister, setUser, setLoading } = useAuth();

  if (loading) {
    return <h1>Loading ....</h1>;
  }

  const submitHandler = async (e) => {
    setLoading(true);
    try {
      e.preventDefault();
      console.log(user);
      const data = await handleRegister(
        user.username,
        user.email,
        user.password,
      );
      setUser(data.user);

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
      setUserData({ username: "", email: "", password: "" });
      setLoading(false);
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
              onChange={(e) =>
                setUserData({ ...user, username: e.target.value })
              }
              type="text"
              placeholder="Enter your username"
              name="username"
            />
          </div>
          <div>
            <input
              required
              value={user.email}
              onChange={(e) => setUserData({ ...user, email: e.target.value })}
              type="email"
              placeholder="Enter your email"
              name="email"
            />
          </div>
          <div>
            <input
              required
              value={user.password}
              onChange={(e) =>
                setUserData({ ...user, password: e.target.value })
              }
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
