
const registration =  document.getElementById('registrationForm');

registration.addEventListener('submit' , function (event){
    event.preventDefault();
   const name =  document.getElementById('name').value;
   const email = document.getElementById('email').value; 
   const password = document.getElementById('password').value; 

   const userData = document.getElementById('userData');
   userData.innerHTML = `
   <h2>Registered Users Data</h2>
   <p><strong>Name : </strong> : ${name} </p>
   <p><strong>Email : </strong> : ${email} </p>
   <p><strong>Password : </strong> : ${password} </p>
   `;
});