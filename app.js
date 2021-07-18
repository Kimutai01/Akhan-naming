
let maleNames=['Kwame','Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'kofi'];
let femaleNames=['Ama','Akosua', 'Adwoa','Abenaa', 'Akua', 'Yaa', 'Afua'];
let days=['saturday', 'Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday'];

function male() {
    let male=document.getElementById('male').value;
    document.getElementById('result').innerHTML = male;
    alert(male)

}

function female(){
    let female=document.getElementById('female').value;
    document.getElementById('result').innerHTML=female;
    alert(female);
}

function akhanName(){
    

    let date = document.getElementById('birthday').value

    let year = String(date)
    let CC = parseInt(date.substr(0,2));
    let YY = parseInt(date.substr(2,2));
    let MM = parseInt(date.substr(5,2));
    let DD = parseInt(date.substr(8,2));
    let siku=(((CC/4) - 2 * CC - 1) + ((5 * YY/4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
    let tra = Math.floor(siku)
    alert(tra);
    let kim = document.getElementById('result').innerHTML
    let maleNames=['Kwame','Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'kofi'];
    let femaleNames=['Ama','Akosua', 'Adwoa','Abenaa', 'Akua', 'Yaa', 'Afua'];
    let days=['saturday', 'Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday'];

  if(tra == 1 && kim=='male' ){
      alert(maleNames[1]);
      document.getElementById('akan').innerHTML = (maleNames[1]);
  } else if(tra==2 && kim=='male'){
      alert(maleNames[2])
      document.getElementById('akan').innerHTML = (maleNames[2])
  }else if(tra==3 && kim=='male'){
    alert(maleNames[3])
    document.getElementById('akan').innerHTML = (maleNames[3])
  }else if(tra==4 && kim=='male'){
    alert(maleNames[4])
    document.getElementById('akan').innerHTML = (maleNames[4])
  }else if(tra==5 && kim=='male'){
    alert(maleNames[5])
    document.getElementById('akan').innerHTML = (maleNames[5])
  }else if(tra==6 && kim=='male'){
    alert(maleNames[6])
    document.getElementById('akan').innerHTML = (maleNames[6])
  }else if(tra==0 && kim=='male'){
    alert(maleNames[0])
    document.getElementById('akan').innerHTML = (maleNames[0])
  }

  if(tra == 1 && kim=='female' ){
    alert(femaleNames[1]);
    document.getElementById('akan').innerHTML = (femaleNames[1]);
  } else if(tra==2 && kim=='female'){
    alert(femaleNames[2]);
    document.getElementById('akan').innerHTML = (femaleNames[2]);
  }else if(tra==3 && kim=='female'){
  alert(femaleNames[3]);
  document.getElementById('akan').innerHTML = (femaleNames[3]);
  }else if(tra==4 && kim=='female'){
  alert(femaleNames[4]);
  document.getElementById('akan').innerHTML = (maleNames[4]);
  }else if(tra==5 && kim=='female'){
  alert(femaleNames[5]);
  document.getElementById('akan').innerHTML = (femaleNames[5]);
  }else if(tra==6 && kim=='female'){
  alert(femaleNames[6]);
  document.getElementById('akan').innerHTML = (femaleNames[6])
  }else if(tra==0 && kim=='female'){
  alert(femaleNames[0]);
  document.getElementById('akan').innerHTML = (femaleNames[0]);
  }



    
    


    

    
}

