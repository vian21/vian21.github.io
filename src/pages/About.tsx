import { Link } from "react-router-dom";
import { ProductivityCharts } from "../components/ProductivityCharts";

export default function About() {
  return (
    <>
      <div className="">
        <div className="grid m-auto w-11/12">
          <center>
            <h1 className="font-bold text-2xl">About Me</h1>
          </center>

          <p>
            My name is Patrick Igiraneza, I am an enthusiastic Software/Web
            developer. I am originally from Burundi which is a country found in
            the east of Africa. I am currently enrolled at the university of
            Ottawa in Software engineering(CO-OP) in French Immersion.
          </p>

          <p>
            I love tweaking software, making music and figuring stuff out. I
            mainly play the electric guitar(for now) but I am also working on
            improving my piano 🎹 skills as well as my musical ear. I play the
            acoustic, bass, piano and unfortunately no drums(yet 😁).
          </p>

          <p>
            I have mostly worked on the web, exploring all its greatness and
            beauty, and lately I have started gaining interest in embedded
            software, operating systems and cybersecurity 🤖.
          </p>

          <p>Take a look of some cool stuff I have worked on!</p>

          <center>
            <Link
              to="/projects"
              className="bg-blue-300 p-3 my-4 font-bold rounded-lg text-white"
            >
              Projects →
            </Link>
          </center>
          <h1 className="font-bold text-2xl m-auto mt-5">Stats</h1>
          <ProductivityCharts />
        </div>
      </div>
    </>
  );
}
