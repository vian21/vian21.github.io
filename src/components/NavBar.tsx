import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { inDarkMode } from "../assets/utils";

function NavLinks(props: { hidden: boolean }) {
  if (props.hidden) return <></>;

  return (
    <>
      <li>
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/projects">
          Projects
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/cv">
          CV
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/Contacts">
          Contact Me
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/shell">
          Terminal
        </Link>
      </li>
      <li>
        <a className="nav-link" href="/docs/index.html">
          Docs
        </a>
      </li>
    </>
  );
}

export default function NavBar() {
  function toggleMode() {
    let theme;
    if (inDarkMode()) {
      document.documentElement.classList.remove("dark");

      theme = "light";
      setMode(false);
    } else {
      document.documentElement.classList.add("dark");

      theme = "dark";
      setMode(true);
    }

    const event = new Event("themeChange");
    document.dispatchEvent(event);
    localStorage.setItem("theme", theme);
  }

  const dark = localStorage.getItem("theme") === "dark" ? true : false;
  const [mode, setMode] = useState(dark);

  const minWidth = 750;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showNav, setShowNav] = useState(isDesktop());
  const [showMenu, setShowMenu] = useState(false);

  function isDesktop() {
    if (window.innerWidth < minWidth) {
      return false;
    }

    return true;
  }

  useEffect(() => {
    if (inDarkMode()) {
      setMode(true);
    } else {
      setMode(false);
    }

    addEventListener("resize", () => {
      if (!isDesktop()) {
        setShowNav(false);
      } else {
        setShowMenu(false);
        setShowNav(true);
      }

      setWindowWidth(window.innerWidth);
    });

    const menu = document.querySelector(".menu");
    menu?.addEventListener("click", (e) => {
      console.log("menu clicked");
      setShowMenu(false);
    });
  }, []);

  return (
    <div className="flex justify-between sticky w-full p-2">
      <div className="w-8 h-8">
        {/* Home button*/}
        <Link className="" to="/">
          <img className="w-full h-full rounded-full" src="profile.png" />
        </Link>
      </div>

      {/* Nav bar */}
      <nav>
        <ul className="m-0 p-0 list-none flex gap-2 items-center">
          {/* Nav links */}
          <NavLinks hidden={!showNav} />

          {/* dark mode toggle */}
          <li onClick={toggleMode}>
            {mode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            )}
          </li>

          {!isDesktop() ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mx-2 w-6 h-6"
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            false
          )}

          <ul className="menu absolute bg-slate-700 drop-shadow-2xl  divide-y-2 divide-gray-100 flex flex-col gap-y-2 right-2 rounded-md z-10 p-3 top-10 empty:hidden my-auto">
            <NavLinks hidden={!showMenu} />
          </ul>
        </ul>
      </nav>
    </div>
  );
}
