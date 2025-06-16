import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


const Home = () => {
  const [username, setUsername] = useState("");
  const [hasWelcomed, setHasWelcomed] = useState(false);


  useEffect(() => {
    const verifyCookie = async () => {

      const token = localStorage.getItem("token");

      if (!token) {
        window.location.href="https://zerodha-clone-landing-page.onrender.com/login";
        return;
      }

      try {
        const res = await axios.post(
          "https://zerodha-clone-n5oh.onrender.com/api/verify-user",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.data.status) {
          localStorage.removeItem("token");

          // fallback URL in case backend messes up again
          const redirectUrl = res.data.redirectTo?.startsWith("http")
            ? res.data.redirectTo
            : "https://zerodha-clone-landing-page.onrender.com/login";

          window.location.href = redirectUrl; // full redirect, avoids wrong path joining
          return;
        }
        
        if (res.data.status && !hasWelcomed) {
          toast.info(`Welcome to Dashboard!`, {
            position: "bottom-left",
            icon: false,
          });
          setHasWelcomed(true);
          setUsername(res.data.username);
        }

      } catch (err) {
        console.error("User verification failed:", err);
        toast.error("User verification failed. Please log in again.", { position: "bottom-left" });
        localStorage.removeItem("token");
        window.location.href="https://zerodha-clone-landing-page.onrender.com/login";
      }
    };

    verifyCookie();
  }, [hasWelcomed, navigate]);
  

  return (
    <>
      <TopBar />
      <Dashboard username={username} />
      <ToastContainer />
    </>
  );
};

export default Home;