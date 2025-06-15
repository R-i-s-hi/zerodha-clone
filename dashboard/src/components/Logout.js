// import { useCookies } from "react-cookie";
// import { ToastContainer, toast } from "react-toastify";
// import axios from "axios";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";

// const Logout = () => {
//   const [, removeCookie] = useCookies(["token"]);

//   const handleLogout = async () => {
//     try {
//       await axios.post("http://localhost:5000/api/logout", {}, { withCredentials: true });
//       removeCookie("token");
//       toast.success("Logged out successfully!", { position: "bottom-left" });
//       useNavigate("http://localhost:3000/login"); // Redirect to login
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   };

//   return (
//     <>
//       <button onClick={handleLogout}>Logout</button>
//       <ToastContainer />
//     </>
//   );
// };

// export default Logout;