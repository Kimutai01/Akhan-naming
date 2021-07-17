
let maleNames=['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'kofi', 'Kwame'];
let femaleNames=['Akosua', 'Adwoa','Abenaa', 'Akua', 'Afua', 'Ama'];
let days=['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday'];

function male(){
    let male=document.getElementById('male').value
    // document.getElementById('result').innerHTML=male
    alert(male)

}

function female(){
    let female=document.getElementById('female').value
    // document.getElementById('result').innerHTML=female
    alert(female)
}

function akhanName(){

    let date = document.getElementById('birthday').value

    let CC = date.substr(0,2);
    let YY = date.substr(2,2);
    let MM = date.substr(5,2);
    let DD = date.substr(8,2);

    let theDay = (((CC/4) - 2 * CC - 1) + ((5 * YY/4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
    alert(theDay)

    
}

