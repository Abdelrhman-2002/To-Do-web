let sign=document.getElementById('signupButton');
let fname=document.getElementById('signupFname');
let lname=document.getElementById('signupLname');
let email=document.getElementById('signupEmail');
let username=document.getElementById('signupUserName');
let password=document.getElementById('signupPassword');
let confpassword=document.getElementById('signupConfirmPassword');
let usernameValidation=document.getElementById('UsernameValidation');
usernameREGEX=/(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
//username is 8-20 characters long&&no _ or . at the beginning&&no __ or _. or ._ or .. inside&&allowed characters&&no _ or . at the end
let emailREGEX=/^([a-z]|[A-Z]|[0-9]){8,20}@(gmail|yahoo|icloud|hotmail)\.com$/;
let passwordREGEX=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const users=[];
username.addEventListener('change', function () {
    if (!usernameREGEX.test(username.value)){
        username.nextElementSibling.innerHTML="invaled username";
        username.nextElementSibling.style.color = 'red';
        username.style.outline = '1px solid red';

    }
    if (usernameREGEX.test(username.value)){
        username.nextElementSibling.innerHTML="";
        username.style.outline = 'none';
    }
});
email.addEventListener('change', function () {
    if (!emailREGEX.test(email.value)){
        email.nextElementSibling.innerHTML="email should be like .......@example.com";
        email.nextElementSibling.style.color = 'red';
        email.style.outline = '1px solid red';
    }
    if (emailREGEX.test(email.value)){
        email.nextElementSibling.innerHTML="";
        email.style.outline = 'none';
    }
});
password.addEventListener('change', function () {
    if (!passwordREGEX.test(password.value)){
        password.nextElementSibling.innerHTML="email should be like .......@example.com";
        password.nextElementSibling.style.color = 'red';
        password.style.outline = '1px solid red';
    }
    if (passwordREGEX.test(password.value)){
        password.nextElementSibling.innerHTML="";
        password.style.outline = 'none';
    }
});
confpassword.addEventListener('change', function () {
    if (password.value!=confpassword.value){
        confpassword.nextElementSibling.innerHTML="password confirmation should be the same as password";
        confpassword.nextElementSibling.style.color = 'red';
        confpassword.style.outline = '1px solid red';
    }
    if (password.value==confpassword.value){
        confpassword.nextElementSibling.innerHTML="";
        confpassword.style.outline = 'none';
    }
});
sign.addEventListener('click',function(){
    if (usernameREGEX.test(username.value)&&emailREGEX.test(email.value)&&passwordREGEX.test(password.value)&&confpassword.value===password.value){
        let user={
            First:fname.value,
            Last:lname.value,
            Username:username.value,
            Email:email.value,
            Image:"",
            password:signupPassword.value
        };
        //create a new product object
        users.push(user);
        //pushing the new product into the products array
        addUser();
        
    }else{
        confpassword.nextElementSibling.innerHTML="Please enter all the fields!";
        confpassword.nextElementSibling.style.color = 'red';
    }
})
function addUser(){
    window.localStorage.setItem('Users',JSON.stringify(users));
    clear();
}
function clear(){
    fname.value='';
    lname.value='';
    password.value='';
    confpassword.value='';
    email.value='';
    username.value='';
}