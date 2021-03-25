const app = document.getElementById("app");


getUsers().then((res) => {
  res.forEach((user) => {
    /* Create list item */
    const card = document.createElement("div");
    card.className = "col-10 col-sm-6 col-md-4 col-xl-3 user__card";
    card.id = `user${user.id}`;

    /* Create user name */
    const name = document.createElement("p");
    name.innerHTML =
      "<b>" + user.name + "</b> <span>-- " + user.username + "</span>";

    /* Create address */
    const { city, street, suite } = user.address;

    const address = document.createElement("address");
    address.innerText = street + " " + suite + ", " + city;

    card.appendChild(name);
    card.appendChild(address);

    /* Append element to list */
    app.appendChild(card);
  });
});

async function getUsers() {
  return (await fetch("https://jsonplaceholder.typicode.com/users")).json()
}