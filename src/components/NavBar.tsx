import { Link } from "react-router-dom";

export default function NavBar() {
  function toggleMode() {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }

  return (
    <div className="flex justify-between sticky w-full items-center p-2">
      <div className="w-8 h-8">
        {/* Home button*/}
        <Link className="" to="/">
          <img
            className="w-full h-full"
            src="https://i.pinimg.com/originals/93/d3/e3/93d3e31639a4d07613de9dccdc8bd5e8.png"
          />
        </Link>
      </div>

      {/* Nav bar */}
      <nav>
        <ul className="m-0 p-0 list-none flex gap-2 items-center">
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
          <li>
            <button className="nav-link" onClick={toggleMode}>
              Dark Mode
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
