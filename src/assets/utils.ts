export function inDarkMode() {
  if (document.documentElement.classList.contains("dark")) {
    return true;
  } else {
    return false;
  }
}
