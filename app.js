

function male() {
    let male=document.getElementById('male').value;
    document.getElementById('result').innerHTML = male;

}

function female(){
    let female=document.getElementById('female').value;
    document.getElementById('result').innerHTML=female;
}

function akhanName(){

    
    

    let date = document.getElementById('birthday').value

    let year = String(date)
    let CC = parseInt(date.substr(0,2));
    let YY = parseInt(date.substr(2,2));
    let MM = parseInt(date.substr(5,2));
    let DD = parseInt(date.substr(8,2));
    let siku=(((CC/4) - 2 * CC - 1) + ((5 * YY/4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
    let tra = Math.floor(siku);
    let kim = document.getElementById('result').innerHTML;
    let maleNames=['Kwame','Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'kofi'];
    let femaleNames=['Ama','Akosua', 'Adwoa','Abenaa', 'Akua', 'Yaa', 'Afua'];
    let days=['saturday', 'Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday'];

  if(tra == 0 && kim=='male' ){
      document.getElementById('akan').innerHTML =('your name is' +' ' + (maleNames[0]));
  } else if(tra==1 && kim=='male'){
      document.getElementById('akan').innerHTML = ('your name is' + ' ' + (maleNames[1]));
  }else if(tra==2 && kim=='male'){
    document.getElementById('akan').innerHTML = ('your name is' +' ' + (maleNames[2]));
  }else if(tra==3 && kim=='male'){
    document.getElementById('akan').innerHTML = ('your name is' +' ' + (maleNames[3]));
  }else if(tra==4 && kim=='male'){
    document.getElementById('akan').innerHTML = ('your name is' + ' ' +(maleNames[4]));
  }else if(tra==5 && kim=='male'){
    document.getElementById('akan').innerHTML = ('your name is' + ' ' + (maleNames[5]));
  }else if(tra==6 && kim=='male'){
    document.getElementById('akan').innerHTML = ('your name is' + ' ' + (maleNames[6]));
  };

  if(tra == 0 && kim=='female' ){
    document.getElementById('akan').innerHTML = ('your name is' + ' ' + (femaleNames[0]));
  } else if(tra==1 && kim=='female'){
    document.getElementById('akan').innerHTML = ('your name is' + ' ' + (femaleNames[1]));
  }else if(tra==2 && kim=='female'){
  document.getElementById('akan').innerHTML = ('your name is' + ' ' + (femaleNames[2]));
  }else if(tra==3 && kim=='female'){
  document.getElementById('akan').innerHTML = ('your name is' + ' ' + (femaleNames[3]));
  }else if(tra==4 && kim=='female'){
  document.getElementById('akan').innerHTML = ('your name is' + ' ' + (femaleNames[4]));
  }else if(tra==5 && kim=='female'){
  document.getElementById('akan').innerHTML = ('your name is' + ' ' + (femaleNames[5]))
  }else if(tra==6 && kim=='female'){
  document.getElementById('akan').innerHTML = ('your name is' + ' ' + (femaleNames[6]));
  };

  if (date == '') {
    alert('please enter date!')
  };


   
};

