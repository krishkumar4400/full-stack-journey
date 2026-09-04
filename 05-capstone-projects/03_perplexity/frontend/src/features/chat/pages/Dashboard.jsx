import { useSelector } from "react-redux";
import { useChat } from "../hooks/useChat.js";
import { useEffect } from "react";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  console.log(user);

  const chat = useChat();

  useEffect(() => {
    chat.initializeSocketConnection();
  }, []);

  return (
    <div>
      Dashboard{" "}
      <div>
        <p>Hello {user.username}</p>
      </div>{" "}
    </div>
  );
};

export default Dashboard;
