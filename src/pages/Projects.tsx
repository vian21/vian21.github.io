import projects from "../assets/projects";

export default function Projects() {
  return (
    <div className="w-full">
      <p>My projects</p>
      <ul className="m-auto w-11/12 list-disc">
        {projects.map((project, id) => {
          return (
            <li
              className="hover:bg-green-500 dark:hover:bg-slate-500 dark:hover:text-white m-1 p-3"
              key={id}
            >
              <a
                className=" w-full"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
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
