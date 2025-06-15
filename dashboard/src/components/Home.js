import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [, removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");
  const [hasWelcomed, setHasWelcomed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyCookie = async () => {

      await axios.post(
        "http://localhost:5000/api/verify-user",
        {},
        { withCredentials: true }
      ).then(res => {
        if (!res.data.status) {
          console.log("No user found or token is invalid");
          removeCookie("token");
          navigate(res.data.redirectTo);
          return;
        }
        if (res.data.status && !hasWelcomed) {
          toast.info(`Welcome to Dashboard!`, { position: "bottom-left", icon: false });
          setHasWelcomed(true);
          setUsername(res.data.username);
          console.log(res.data);
        }
      }) .catch(err => {
        console.error("Error verifying user:", err);
        toast.error("Failed to verify user. Please log in again.", { position: "bottom-left" });
        removeCookie("token");
        navigate("http://localhost:3000/login");
        return;
      });
    };

    verifyCookie();
  }, [hasWelcomed, removeCookie]);
  

  return (
    <>
      <TopBar />
      <Dashboard username={username} />
      <ToastContainer />
    </>
  );
};

export default Home;