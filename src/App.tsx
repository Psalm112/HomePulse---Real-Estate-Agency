import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Login from "./modules/authentication/Login.js";
import Register from "./modules/authentication/Register.js";
import Homepage from "./pages/Homepage.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Property from "./pages/Property.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/aboutus",
    element: <About />,
  },
  {
    path: "/contactus",
    element: <Contact />,
  },
  {
    path: "/property",
    element: <Property />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  // {
  //   path: "/property/sales",
  //   element: <Login />,
  // },
  // {
  //   path: "/property/rentals",
  //   element: <Login />,
  // },
  // {
  //   path: "/property/commercial",
  //   element: <Login />,
  // },
]);
export default function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

// export default App;
