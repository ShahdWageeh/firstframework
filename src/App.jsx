import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import Layout from "./components/Layout/Layout";

let routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About/> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
      
    ],
  },
  { path: "*", element: <NotFound /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
