import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="">
        <div className=" grid  m-auto w-11/12">
          <center>
            <h1 className="text-2xl">About Me</h1>
          </center>
          {/* <p>
            <span className="font-bold">Name</span>: Patrick Igiraneza
          </p>

          <p>
            <span className="font-bold">Website</span>:
            <a href="https://vian21.github.io" target="_blank" rel="noopener">
              vian21.github.io
            </a>
          </p>

          <p>
            <span className="font-bold">Linkedin</span>:
            <a
              href="https://linkedin.com/in/patrick31/"
              target="_blank"
              rel="noopener"
            >
              @patrick31
            </a>{" "}
          </p>

          <p>
            <span className="font-bold">Github</span>:
            <a href="https://github.com/vian21" target="_blank" rel="noopener">
              @vian21
            </a>{" "}
          </p> */}
          <p>
            My name is Patrick Igiraneza, I am an enthusiastic Software/Web
            developer. I am originally from Burundi which is a country found in
            the east of Africa. I am currently enrolled at the university of
            Ottawa in Software engineering(CO-OP) in French Immersion.
          </p>

          <p>
            I love tweaking software, making music and figuring stuff out. I
            play mainly the electric guitar(for now) but I am also working on
            improving my piano 🎹 skills as well as my musical ear. I play the
            acoustic, bass, piano and unfortunately no drums(yet 😁).
          </p>

          <p>
            I am have mostly worked on the web, exploring all its greatness and
            beauty, and lately I have started gaining interest in embedded
            software, operating systems and cybersecurity 🤖.
          </p>

          <p>Take a look of some cool stuff I have worked on!</p>

          <center>
            <Link to="/projects" className="bg-blue-300  p-4 rounded-lg">
              Projects →
            </Link>
          </center>
        </div>
      </div>
    </>
  );
}
