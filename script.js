'use strict';

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
