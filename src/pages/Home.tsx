import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { About, Contacts } from "../pages";

export default function Home() {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current || "", {
      strings: [
        "a Software Developer",
        "a Web Developer",
        "a Full Stack Developer",
        "an embedded systems developer",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="m-auto">
      <div className="w-11/12 lg:w-5/6 p-3 m-auto">
        <h1 className="font-light px-3 text-lg">Hi, my name is</h1>
        <h1 className="font-extrabold px-3 py-1 text-4xl lg:text-6xl">
          Patrick Igiraneza
        </h1>
        <h1 className="px-3">&</h1>
        <h1 className="px-3 font-light text-lg">
          I am <span className="font-bold" ref={el}></span>
        </h1>
      </div>
      <About />
      <Contacts />
    </div>
  );
}
