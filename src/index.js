const app = document.getElementById("app");

const userList = document.createElement("div");
userList.className = "user-list";

getUsers().then((res) => {
  res.forEach((user) => {
    /* Create list item */
    const card = document.createElement("div");
    card.className = "user";
    card.id = `user${user.id}`;

    /* Create user name */
    const name = document.createElement("p");
    name.className = "user-name";
    name.innerHTML =
      "<b>" + user.name + "</b> <span>-- " + user.username + "</span>";

    /* Create address */
    const { city, street, suite } = user.address;

    const address = document.createElement("address");
    address.innerText = street + " " + suite + ", " + city;

    const text = document.createElement("h6");
    text.innerText = `hola ${user.name} !`;
    text.style.color = "red";
    text.style.paddingTop = "10px";
    text.style.margin = "0px";

    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(text);

    /* Append element to list */
    userList.appendChild(card);
  });

  app.appendChild(userList);
});

function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
}
