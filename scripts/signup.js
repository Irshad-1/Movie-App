
document.querySelector('form').addEventListener('submit',signUpFn);
var userData;
if(localStorage.getItem('userData')==null)
        userData=[];
    else{
        userData=JSON.parse(localStorage.getItem('userData'));
    }
function signUpFn(){
    event.preventDefault();
    var userObj={
        name:document.querySelector('#userName').value,
        phno: document.querySelector('#userNumber').value,
        email: document.querySelector('#userEmail').value,
        password :document.querySelector('#userPassword').value
    };
    userData.push(userObj);
    localStorage.setItem('userData',JSON.stringify(userData));
    alert("Signup successful");
    window.location.href='login.html';
}