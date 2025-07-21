import { Link } from "react-router-dom";
import { inDarkMode } from "../assets/utils";
import { useEffect, useState } from "react";

export default function About() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleChange = () => {
      setIsDark(inDarkMode());
    };

    // initial theme load
    setIsDark(inDarkMode());
    document.addEventListener("themeChange", handleChange);

    return () => {
      document.removeEventListener("themeChange", handleChange);
    };
  }, []);
  return (
    <>
      <div className="">
        <div className="grid m-auto w-11/12">
          <center>
            <h1 className="font-bold text-4xl">About Me</h1>
          </center>

          <p>
            My name is Patrick Igiraneza and I am a passionate Software
            developer. I am currently enrolled at the university of Ottawa in
            Software engineering. I love tweaking software, making music and
            figuring stuff out.
          </p>

          <p>
            I play the electric guitar, acoustic, bass, and piano. I have mostly
            worked on the web, exploring all its greatness and beauty, and
            lately I have started gaining an interest in embedded software,
            operating systems and cybersecurity.
          </p>

          <p className="mb-8">
            Take a look of some cool stuff I have worked on!
          </p>

          <center>
            <Link
              to="/projects"
              className="bg-blue-300 p-3 font-bold rounded-lg text-white"
            >
              Projects →
            </Link>

            <h1 className="font-bold text-4xl my-8">Stats</h1>
          </center>
          {/* <ProductivityCharts /> */}
          <figure className="w-full lg:w-4/5 m-auto">
            {isDark ? (
              <embed src="https://wakatime.com/share/@199e2002-4d85-4793-9cd5-78bc716c0dc8/6a7cc80b-f974-4f49-aa9d-a815e82070aa.svg"></embed>
            ) : (
              <embed src="https://wakatime.com/share/@199e2002-4d85-4793-9cd5-78bc716c0dc8/0b318b8c-bd52-449f-aaa9-1bf1bfda5a6d.svg"></embed>
            )}{" "}
          </figure>
        </div>
      </div>
    </>
  );
}
