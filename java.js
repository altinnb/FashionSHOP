function setNewImage()
{
    document.getElementById("img1").src ="images/tomford2.webp";
}
function setOldImage()
{
    document.getElementById("img1").src ="images/tomford1.webp";
}
function setNewImage1()
{
    document.getElementById("img2").src ="images/pantss1.webp";
}
function setOldImage1()
{
    document.getElementById("img2").src ="images/pantss2.webp";
}
function setNewImage2()
{
    document.getElementById("img3").src ="images/givenchy2.webp";
}
function setOldImage2()
{
    document.getElementById("img3").src ="images/givenchy1.webp";
}
function setNewImage3()
{
    document.getElementById("img4").src ="images/hoodie2.webp";
}
function setOldImage3()
{
    document.getElementById("img4").src ="images/hoodie1.webp";
}
function setNewImage4()
{
    document.getElementById("img5").src ="images/tshirt2.webp";
}
function setOldImage4()
{
    document.getElementById("img5").src ="images/tshirt1.webp";
}
function setNewImage5()
{
    document.getElementById("img6").src ="images/jacket2.webp";
}
function setOldImage5()
{
    document.getElementById("img6").src ="images/jacket1.webp";
}
function setNewImage6()
{
    document.getElementById("img7").src ="images/tshirt4.webp";
}
function setOldImage6()
{
    document.getElementById("img7").src ="images/tshirt3.webp";
}
function setNewImage7()
{
    document.getElementById("img8").src ="images/pants4.webp";
}
function setOldImage7()
{
    document.getElementById("img8").src ="images/pants3.webp";
}
function setNewImage8()
{
    document.getElementById("img9").src ="images/piana4.webp";
}
function setOldImage8()
{
    document.getElementById("img9").src ="images/piana3.webp";
}


function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}
function login(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexPassword = /(^[A-Z])([0-9]{3}$)/;

    if(!regexEmail.test(email)){
        alert("Write another email!");
        return false;
    }
    else if(!regexPassword.test(password)){
        alert("Write another password!");
        return false;
    }
    else{
        alert("Login successfully!");
        return true;
    }
}
function signup(){
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    const regexName = /^[A-Z]{1}[a-zA-Z]/;
    const regexSurname = /^[A-Z]{1}[a-zA-Z]/;
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexPassword = /(^[A-Z])([0-9]{3}$)/;

    if(!regexName.test(name)){
        alert("Write another name!");
        return false;
    }
    else if(!regexSurname.test(surname)){
        alert("Write another surname!");
        return false;
    }
    else if(!regexEmail.test(email)){
        alert("Write another email!");
        return false;
    }
    else if(!regexPassword.test(password)){
        alert("Write another password!");
        return false;
    }
    else{
        alert("Login successfully!");
        return true;
    }
}