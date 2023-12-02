const wrapper= document.querySelector('.wrapper-form');
const loginForm= document.querySelector('.register-link');
const registerForm= document.querySelector('.login-link');
const btnLogin=document.querySelector('.btn-login');

loginForm.addEventListener('click',()=>{
    wrapper.classList.add('active');
}) 
registerForm.addEventListener('click',()=>{
    wrapper.classList.remove('active');
})

btnLogin.addEventListener('click',()=>{
    wrapper.classList.add('active-login');
})

function registerNew(){

   let form=document.querySelector('.formRegis');
   form.addEventListener("submit",e =>{
    e.preventDefault();

    let formData=new FormData(form);
    let data=Object.fromEntries(formData);
    let jsonData=JSON.stringify(data);
    

    console.log(jsonData);
    fetch('https://md4-fphd.onrender.com/student/v1/itsmdaucode/details/registration.php',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: jsonData
      })
      .then(res =>
          console.log(res)
      )
      .catch(error => console.log(error));
   }
   );
   wrapper.classList.remove('active-login');
}
   
  