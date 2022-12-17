const emailInput = document.getElementById('email');

emailInput.addEventListener('change', (event) => {
  const email = event.target.value;
  const errorElement = document.getElementById('errorMsg');

  //wrong email message
  if (email.length < 3 || !email.includes('@') || !email.includes('.')) {
    errorElement.textContent = 'Make sure email is more than 3 Characters and has @ and a .';
    errorElement.style.color='red';
  }
   else {
    errorElement.textContent = '';
  }
});

const password = document.getElementById('password');

password.addEventListener('change', (event) => {

  //password error msg 
  const password = event.target.value;
  const errorPasswordMsg = document.getElementById('errorPasswordMsg');

  //wrong password message
  if (password.length < 8) {
    errorPasswordMsg.textContent = 'Make sure password is more than 8 Characters.';
    errorPasswordMsg.style.color='red';
  }
  else {
    errorPasswordMsg.textContent = '';
  }

   //correct msg
   const email = document.getElementById('email').value;
   const ValidationElement = document.getElementById('errorPasswordMsg');
 
   //correct validation message
   if (password.length >= 8 && email.length >= 8 && email.includes('@') && email.includes('.')) {
     ValidationElement.innerText = 'All good to go!';
     ValidationElement.style.color='green';
   }
});


const form = document.getElementById('form');

form.addEventListener('click', (event) => {
  event.preventDefault(); // prevent the form from being submitted

  if (confirm('Are you sure you want to submit the form?')) {
    alert('Successful signup!');
  } else {
    // redirect to the same page and clear the input values
    window.location.href = window.location.href;
  }
});
