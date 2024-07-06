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
            My name is Patrick Igiraneza and I am a passionate Software
            developer. I am currently enrolled at the university of
            Ottawa in Software engineering. I love tweaking software, making music and figuring stuff out.
          </p>

          <p>
            I play the electric guitar, acoustic, bass, and piano.
            I have mostly worked on the web, exploring all its greatness and
            beauty, and lately I have started gaining an interest in embedded
            software, operating systems and cybersecurity.
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
