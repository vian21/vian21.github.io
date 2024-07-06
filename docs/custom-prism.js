
// custom-prism-languages.js
(function() {
  const languages = ["bash", "python", "php", "rust", "java"];
  const version = "1";

  function loadScript(src) {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    document.head.appendChild(script);
  }
  languages.forEach((lang) => {
    loadScript(`https://cdn.jsdelivr.net/npm/prismjs@${version}/components/prism-${lang}.min.js`);
  });
})();
