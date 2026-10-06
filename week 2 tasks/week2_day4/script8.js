// =====================================
// TASK 1: Random User Card
// =====================================

// Function to fetch 1 random user
async function getUser() {
    // 1. Fetch data from API
    const res = await fetch("https://randomuser.me/api");
    const data = await res.json();

    // 2. Get first user
    const user = data.results[0];

    // 3. Show data in HTML
    document.getElementById("user-img").src = user.picture.large;
    document.getElementById("user-name").innerHTML = user.name.first + " " + user.name.last;
    document.getElementById("user-email").innerHTML = user.email;
}

// Call on page load
getUser();


// =====================================
// TASK 2 & MINI CHALLENGE: Display Multiple Users
// =====================================

// Function to fetch 5 users and display in grid
async function loadUsers() {
    // 1. Fetch 5 users from API
    const res = await fetch("https://randomuser.me/api/?results=5");
    const data = await res.json();

    // 2. Get the grid container
    let container = document.getElementById("userList");
    container.innerHTML = ""; // Clear old data

    // 3. Loop through data.results and render user cards
    data.results.forEach((user) => {
        container.innerHTML += `
            <div class="user-box">
                <img src="${user.picture.medium}">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.email}</p>
            </div>
        `;
    });
}

// Call on page load
loadUsers();
