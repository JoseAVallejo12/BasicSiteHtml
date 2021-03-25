const input = document.querySelector("input");

document.addEventListener("keyup", (e) => {
  document.querySelectorAll(".user__card").forEach((nodeHtml) => {
    nodeHtml.textContent.includes(input.value)
      ? nodeHtml.classList.remove("filter")
      : nodeHtml.classList.add("filter");
  });
});
