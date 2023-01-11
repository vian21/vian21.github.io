import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "./components";

export default function App() {
  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <div className="h-full">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
