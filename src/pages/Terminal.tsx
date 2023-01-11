import React, { useState, useEffect } from "react";
// import { redirect } from "react-router-dom";

import { commands } from "../assets/commands";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

//TODO: lock cursor to in prompt
function Prompt(props: any) {
  return (
    <div className="flex text-white">
      <div className="text-green-600"> Guest@portfolio:~$</div>
      <div className="px-2">{props.value}</div>
    </div>
  );
}

function Output(props: any) {
  return (
    <ReactMarkdown
      className="text-white px-2"
      children={props.value}
      remarkPlugins={[remarkGfm]}
    />
  );
}

export default function Terminal() {
  const [output, setOutput] = useState<string[][]>([]);
  const [prompt, setPrompt] = useState("");

  function execute(event: any) {
    event.preventDefault();

    const command: string = prompt.toLowerCase().trim();

    switch (command) {
      case "clear":
        output.splice(0, output.length);
        break;
      case "exit":
        // redirect("/");
        window.location.href = "/";
        break;
      case "cat readme":
        output.push([command, commands["about"]]);
        break;
      default:
        output.push([command, commands[command]]);
    }

    setOutput(output);
    setPrompt("");
  }

  useEffect(() => {
    console.log("scrolling in function", output);
    const screen = document.querySelector("#screen");
    if (!screen) return;
    screen.scrollTop = screen.scrollHeight;
  }, [output.length]);

  return (
    <div className="bg-black h-screen overflow-auto text-lg" id="screen">
      <div>
        {output?.map((element: any, index: number) => {
          return (
            <div key={index}>
              <Prompt value={element[0]} />
              <Output value={element[1]} />
            </div>
          );
        })}
      </div>
      <form className="flex text-green-600" onSubmit={execute}>
        Guest@portfolio:~$
        <input
          autoFocus
          className="bg-black outline-none px-2 text-white"
          onChange={(event) => {
            setPrompt(event.target.value);
          }}
          type="text"
          value={prompt}
          onBlur={({ target }) => target.focus()}
        />
      </form>
    </div>
  );
}
