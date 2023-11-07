const login = async (email, password) => {
  const response = await fetch('http://localhost:3000/api/v1/users/login', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.

    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },

    body: JSON.stringify({ email, password }), // body data type must match "Content-Type" header
  });
  const data = await response.json();
  console.log(data);
};

const loginForm = document.querySelector('.form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  login(email, password);
});
