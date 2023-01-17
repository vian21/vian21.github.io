import projects from "../assets/projects";

export default function Projects() {
  return (
    <div className="w-full">
      <p>My projects</p>
      <ul className="m-auto w-11/12 list-disc">
        {projects.map((project, id) => {
          return (
            <li
              className="hover:bg-green-200 dark:hover:bg-slate-600  m-1 p-3"
              key={id}
            >
              <a
                className=" w-full"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                {/* <img 
                  className="w-1/2 m-auto mb-3"
                  src={project.preview || "/atom.png"}
                  alt={project.name}
                /> */}

                <p className="text-xl underline">{project.name} →</p>
              </a>

              <p className="">{project.description}</p>
              <p className="">Stack: {project.stack}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
