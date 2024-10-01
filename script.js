'use strict';

function maskPassword(pass) {
  let str = '';
  for (let index = 0; index < pass.length; index++) {
    str += '*';
  }
  return str;
}

function copyText(txt) {
  navigator.clipboard.writeText(txt).then(alert('Copied'));
}

const showPassword = () => {
  let table = document.querySelector('table');
  let data = localStorage.getItem('passwords');

  if (data == null) {
    table.innerHTML = '<tr><td colspan="3">No data to show</td></tr>';
  } else {
    let arr = JSON.parse(data);
    let str = '';

    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];

      str += `<tr>
      <td>${element.website} <img onclick = "copyText('${
        element.website
      }')" src="./copy.svg"></td>
      <td>${element.username} <img onclick = "copyText('${
        element.username
      }')" src="./copy.svg"></td>
      <td>${maskPassword(element.password)} <img onclick = "copyText('${
        element.password
      }')" src="./copy.svg"></td>
      <td><button onclick = "deletePassword('${
        element.website
      }')">Delete</button></td>
      </tr>`;
    }

    table.innerHTML += str; // Append rows to the table
  }
  website.value = '';
  username.value = '';
  password.value = '';
};

showPassword();

const deletePassword = (website) => {
  let data = localStorage.getItem('passwords');
  let arr = JSON.parse(data) || []; // Ensure arr is an array even if data is null
  let arrUpdate = arr.filter((e) => e.website !== website);

  localStorage.setItem('passwords', JSON.stringify(arrUpdate));
  alert(`Successfully Deleted ${website}'s Password`);
  showPassword();
};

document.querySelector('.btn').addEventListener('click', (e) => {
  e.preventDefault();
  // Get the values from the input fields
  let wvalue = document.getElementById('website').value;
  let uvalue = document.getElementById('username').value;
  let pvalue = document.getElementById('password').value;

  // Retrieve existing passwords from local storage
  let json = JSON.parse(localStorage.getItem('passwords')) || [];

  // Push the new password entry
  json.push({
    website: wvalue,
    username: uvalue,
    password: pvalue,
  });

  // Save back to local storage
  localStorage.setItem('passwords', JSON.stringify(json));

  alert('Password Saved');
  showPassword();
});
