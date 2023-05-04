const fs = require("fs");

async function parseDocs() {
  let output = "";

  //get md files
  const files = fs.readdirSync("public/docs/md", { withFileTypes: true });

  const folders = files.filter((file) => file.isDirectory());

  folders
    .forEach((folder) => {
      output += parseFolder(folder.name);
    })

  fs.writeFileSync("public/docs/_sidebar.md", output);
}

function parseFolder(folder) {
  let output = "";

  output += "- " + folder + "\n";

  const files = fs.readdirSync("public/docs/md/" + folder, {
    withFileTypes: true,
  });

  files.forEach((file) => {
    if (file.isDirectory()) {
      output += parseFolder(folder + "/" + file.name);

      return output;
    };

    const data = fs.readFileSync(`public/docs/md/${folder}/${file.name}`, {
      encoding: "utf8",
      flag: "r",
    });

    const title = data.split("\n")[0].replace("# ", "");

    output += "\t- [" + title + "](md/" + folder + "/" + file.name + ")\n";
  });

  return output;
}

parseDocs();
