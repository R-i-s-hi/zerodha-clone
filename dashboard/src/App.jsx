import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./components/Home";
import { CookiesProvider } from "react-cookie";


function App() {
    return (
        <>
        <CookiesProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </CookiesProvider>
        
        </>
    )
}

export default App;