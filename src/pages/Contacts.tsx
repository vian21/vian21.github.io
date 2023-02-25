export default function Contacts() {
  return (
    <div className="">
      <center>
        <h1 className="p-3 text-2xl font-bold">Contacts</h1>
      </center>

      <div className="m-auto w-2/5">
        <p>
          <span className="font-bold">Name</span>: Patrick Igiraneza
        </p>

        <p>
          <span className="font-bold">Website: </span>
          <a
            className="underline decoration-blue-300 decoration-2"
            href="https://vian21.github.io"
            target="_blank"
            rel="noopener"
          >
            vian21.github.io
          </a>
        </p>

        <p>
          <span className="font-bold">Linkedin: </span>
          <a
            className="underline decoration-blue-300 decoration-2"
            href="https://linkedin.com/in/patrick31/"
            target="_blank"
            rel="noopener"
          >
            @patrick31
          </a>
        </p>

        <p>
          <span className="font-bold">Github: </span>
          <a
            className="underline decoration-blue-300 decoration-2"
            href="https://github.com/vian21"
            target="_blank"
            rel="noopener"
          >
            @vian21
          </a>
        </p>
      </div>
    </div>
  );
}
