fetchuser();
async function fetchuser() {
  try {
    const data = await fetch(
      "https://60ed66cda78dc700178adeaf.mockapi.io/api/v1/Users"
    );
    const users = await data.json();
    document.body.innerHTML = "";
    users.forEach((user) => createAvatar(user));
  } catch (err) {
    console.log(err);
  }
}

// fetch(`https://60ed66cda78dc700178adeaf.mockapi.io/api/v1/Users`)
//   .then((data) => data.json())
//   .then((details) => details.forEach((detail) => createAvatar(detail)))
//   .catch((errMsg) => console.log(errMsg));

function createAvatar({ id, name, avatar, createdAt }) {
  const info = document.createElement("div");
  info.setAttribute("class", "container");
  info.innerHTML = `<div class="img-container">
  <img class="img" src =${avatar} height="100px" width="100px"> 
  </div>
  <div class="name-container">
  <p id="name">${name}</p>
  <p id="date">${new Date(createdAt).toDateString()}</p>
  <button onclick=deleteUser(${id})>Delete</button>
  </div>
  `;
  document.body.append(info);
}

async function deleteUser(id) {
  const data = await fetch(
    `https://60ed66cda78dc700178adeaf.mockapi.io/api/v1/Users/${id}`,
    { method: "DELETE" }
  );
  const user = await data.json();
  fetchUser();
}
