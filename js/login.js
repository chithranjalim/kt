function validate()
{
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username == "")
            {
            document.getElementById('3').innerHTML ="**please fill the username field";
            document.getElementById('username').style.border="2px solid red";
            document.getElementById('3').style.color="red";
            
            
            }
        else if((username.length <= 2) || (username.length > 20)) 
            {
        document.getElementById('3').innerHTML =" ** Username lenght must be between 2 and 20";
        document.getElementById('username').style.border="2px solid red";
        document.getElementById('3').style.color="red";
        return false;
         }
        else if(!isNaN(username))
            {
        document.getElementById('3').innerHTML =" ** only characters are allowed";
        document.getElementById('username').style.border="2px solid red";
        document.getElementById('3').style.color="red";
        return false;
            }
        if(password == "")
            {
            document.getElementById('4').innerHTML ="**please fill the password field";
            document.getElementById('password').style.border="2px solid red";
            document.getElementById('4').style.color="red";
            return false;
            }
        else
            {
                return true;
            }
}