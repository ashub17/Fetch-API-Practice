document.querySelector("#getText").addEventListener("click", getText);
document.querySelector("#getUsers").addEventListener("click", getUsers);
document.querySelector("#getPosts").addEventListener("click", getPosts);
document.querySelector("#addPost").addEventListener("submit", addPost);
function getText() {
  fetch("sample.txt")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("#output").innerHTML = data;
    });
}
function getUsers() {
  fetch("user.json")
    .then((response) => response.json())
    .then((data) => {
      let output = "<h2>Users</h2>";
      data.forEach(function (user) {
        output += `
          <ul>
            <li>
                ID:${user.id}
            </li>
            <li>
                Name:${user.name}
            </li>
            <li>
                Email:${user.email}
            </li>
          </ul>
          `;
      });
      document.querySelector("#output").innerHTML = output;
    });
}
function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      let output = "<h2>Users</h2>";
      data.forEach(function (user) {
        output += `
                  ID:${user.id}
                  </br>
                  Title:${user.title}
                  </br>
                  Body:${user.body}
                  </br> </br>
            `;
      });
      document.querySelector("#output").innerHTML = output;
    });
}
function addPost(e) {
  e.preventDefault();
  let title = document.querySelector("#title").value;
  let body = document.querySelector("#body").value;
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: title, body: body }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
