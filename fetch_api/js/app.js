document.querySelector("#getText").addEventListener("click", getText);
document.querySelector("#getUser").addEventListener("click", getUsers);
document.querySelector("#getApi").addEventListener("click", getApi);
document.querySelector("#addPost").addEventListener("submit", addPost);

function getText() {
	fetch("sample.txt")
		.then(function (response) {
			return response.text();
		})
		.then(function (data) {
			document.querySelector("#output").textContent = data;
		})
		.catch((err) => console.log(err));
}
function getUsers() {
	fetch("users.json")
		.then((response) => response.json())
		.then((data) => {
			let output = "<h2>Users</h2>";
			data.forEach(function (user) {
				output += `
                    <ul>
                     <li > Name: ${user.name}</li>
                     <li > Age: ${user.age}</li>
                     <li > Email: ${user.email}</li>
                    </ul>
                `;
			});
			document.querySelector("#output").innerHTML = output;
		});
}

function getApi() {
	fetch("https://jsonplaceholder.typicode.com/posts")
		.then((resp) => resp.json())
		.then((resp) => {
			let output = "<h2>Posts</h2>";
			resp.forEach((post) => {
				output += `
                <div class="post">
                    <h1>POst id: ${post.id}</h1>
                    <h3>${post.title}</h3>
                    <p> ${post.body}</p>
                    
                </div>
                `;
			});
			document.querySelector("#output").innerHTML = output;
		});
}

function addPost(event) {
	event.preventDefault();
	let title = document.getElementById("title").value;
	let body = document.getElementById("body").value;
	fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		headers: {
			Accept: "application/json,text/plain,*/*",
			"Content-type": "application/json",
		},
		body: JSON.stringify({ title: title, body: body }),
	})
		.then((res) => res.json())
		.then((data) => console.log(data));
}
