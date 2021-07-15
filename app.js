
var day= (((CC/4-2*CC-1))+((5*YY/4))+((26*(MM+1)/10)) + DD)%7;
var maleNames=['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'kofi', 'Kwame']
var femaleNames=['Akosua', 'Adwoa','Abenaa', 'Akua', 'Afua', 'Ama']

function akhanName(maleNames) {
    switch(day){
        case 'sunday':
            console.log('Kwasi')
            break;
        case 'Monday':
            console.log('Kwadwo')
            break;
        case 'Tuesday':
            console.log('Kwabena')
            break;
        case 'Wednesday':
            console.log('Kwaku')
            break;
        case 'Thursday':
            console.log('Yaw')
            break;
        case 'Friday':
            console.log('Kofi')
            break;
        default:
            console.log('Kwame')
            break;
    }
}
onclick = akhanName()