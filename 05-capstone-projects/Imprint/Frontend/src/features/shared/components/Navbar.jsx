import { useNavigate } from "react-router";
import "../nav.scss";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <p>Insta</p>
      <button
        onClick={() => {
          navigate("/create-post");
        }}
        className="button primary-button"
      >
        New Post
      </button>
    </nav>
  );
};

export default Navbar;
