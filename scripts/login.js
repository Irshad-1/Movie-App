document.querySelector('form').addEventListener('submit',LoginFn);

    var users=JSON.parse(localStorage.getItem('userData'));

    function LoginFn(){
        event.preventDefault();
        var enteredEmail=document.querySelector('#userEmail').value;
        var enteredPassword=document.querySelector('#userPassword').value;
        var flag=true;
        for(var i=0;i<users.length;i++){
            if(users[i].email==enteredEmail && users[i].password==enteredPassword){
                alert("Login Successful");
                window.location.href="index.html";
                flag=false;
                break;
            }
        }
        if(flag)
        alert("invalid Credentials");

    }