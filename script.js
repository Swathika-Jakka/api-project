// Get the container to display users
const userContainer = document.getElementById("user-container");

// Fetch users from the API
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    users.forEach(user => {
      const userCard = document.createElement('div');
      userCard.classList.add('user-card');

      userCard.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Company:</strong> ${user.company.name}</p>
      `;

      userContainer.appendChild(userCard);
    });
  })
  .catch(error => {
    userContainer.innerHTML = `<p>Failed to fetch user data. Try again later.</p>`;
    console.error('Error fetching data:', error);
  });
