import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import InfoSection from "./components/InfoSection";
import AboutUs from "./components/About";
import LandingPage from "./layouts/LandingPage";
import MessageMe from "./components/Message";
function App() { const router = createBrowserRouter([
    {path: "nav",
    element: <Navbar/>},
    {path: "info",
        element: <InfoSection/>},
     {path: "about",
  element: <AboutUs/>},
  {path: "/",
    element: <LandingPage/>},
    {path: "me",
        element: <MessageMe/>},

]);
return <RouterProvider router={router} />;
}
export default App;