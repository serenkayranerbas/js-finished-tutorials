const content = document.querySelector("p");
console.log(content.classList);
content.classList.add("can"); //class ekleme
content.classList.remove("error"); //class kaldırma

const pdegeri = document.querySelectorAll("p");

pdegeri.forEach((p) => {
  if (p.textContent.includes("error")) {
    p.classList.add("error");
  } else if (p.textContent.includes("success")) {
    p.classList.add("success" );
  }
});
