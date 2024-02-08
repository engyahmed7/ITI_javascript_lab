var dataDiv = document.getElementById("data");
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://dummyjson.com/users");
xhr.send();
let users = [];
xhr.onload = function () {
  if (xhr.status == 200) {
    var data = JSON.parse(xhr.responseText);
    users = data.users;
    console.log(users);
    displayPosts();
  } else {
    console.log("Error code is:" + xhr.status);
  }
};

function displayPosts() {
  let temp = "";
  for (let i = 0; i < users.length; i++) {
    temp += `
              <div class="col-md-3">
                  <div class="card mb-3">
                    <h3 class="text-center">${users[i].firstName} </h1> 
                      <div class="card-body">
                        <h3 class="lead">${users[i].email}</h3>
                        <p class="lead">${users[i].phone}</p>
                      </div>
                  </div>
              </div>
              `;
  }
  document.getElementById("data").innerHTML = temp;
}

// with fetch
async function fetchData() {
  let response = await fetch("https://dummyjson.com/users");
  let data = await response.json();
  console.log(data);
  users = data.users;
  console.log(users);
  displayPosts();
}

fetchData();
