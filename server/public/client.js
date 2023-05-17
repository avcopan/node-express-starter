console.log('script sourced.')

function refreshUsers() {
  fetch('/users')
    .then(res => res.json())
    .then(console.log);
}

fetch('/users/0')
  .then(res => res.json())
  .then(console.log);

let newUser = {
  name: 'Charlie',
  role: 'super-admin',
}

fetch('/users', {
  method: 'POST',
  body: JSON.stringify(newUser),
  headers: {
    'Content-Type': 'application/json',
  }
})
  .then(() => refreshUsers());

let updatedUser = {
  name: 'Anne',
  role: 'user',
}

fetch('/users/0', {
  method: 'PUT',
  body: JSON.stringify(updatedUser),
  headers: {
    'Content-Type': 'application/json',
  }
})
  .then(() => refreshUsers());

fetch('/users/1', {
  method: 'DELETE',
})
  .then(res => res.json())
  .then((deletedUser) => {
    console.log(deletedUser)
  });
