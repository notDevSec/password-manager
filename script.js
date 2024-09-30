'use strict';

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
      <td>${element.website}</td>
      <td>${element.username}</td>
      <td>${element.password}</td>
    </tr>`;
  }

  table.innerHTML += str; // Append rows to the table
}

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
});
