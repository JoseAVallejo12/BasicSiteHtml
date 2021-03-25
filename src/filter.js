const input = document.querySelector("input");

document.addEventListener("keyup", (event) => {
  document.querySelectorAll(".user").forEach((e) => {
    e.textContent.includes(input.value)
      ? e.classList.remove("filter")
      : e.classList.add("filter");
  });
});
