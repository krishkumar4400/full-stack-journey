import Navbar from "../../../shared/Navbar.jsx";
import Button from "../components/Button.jsx";
import { Link } from "react-router";
import { useState } from "react";
import { Mail, User } from "lucide-react";
import { useAuth } from "../hooks/useAuth.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin, loading, navigate } = useAuth();

  const submitHandler = async (e) => {
    e.preventDefault();
    await handleLogin(email, password);
    navigate("/");
  };

  if (loading) {
    return <h1>Loading ....</h1>;
  }
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen border flex items-center justify-center">
        <div className="border border-gray-400 min-w-sm flex items-center justify-center flex-col rounded px-12 py-6">
          <h1 className="text-center text-2xl font-semibold pb-6">Login</h1>
          <form onSubmit={submitHandler} className="w-full">
            <div className="flex items-center justify-center w-full border border-gray-400 rounded mb-4 py-2 text-xs gap-2 px-5">
              <Mail size={15} className="text-gray-400" />
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="Enter youe email"
                className="w-full outline-none text-gray-400 "
              />
            </div>

            <div className="flex items-center justify-center w-full border border-gray-400 rounded mb-4 py-2 text-xs gap-2 px-5">
              <Mail size={15} className="text-gray-400" />
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="Enter youe password"
                className="w-full outline-none text-gray-400 "
              />
            </div>

            <Button action={"Login"} />
            <div className="text-sm text-center flex items-center justify-center gap-2 text-gray-400">
              <p>Don't have an account ?</p>
              <Link to={"/register"} className="text-blue-400">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
