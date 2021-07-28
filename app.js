

function male() {
  let male = document.getElementById('male').value;
  document.getElementById('result').innerHTML = male;

}

function female() {
  let female = document.getElementById('female').value;
  document.getElementById('result').innerHTML = female;
}

function akhanName() {




  let date = document.getElementById('birthday').value
  let theDay = new Date(date)
  let siku = theDay.getDay();



  let kim = document.getElementById('result').innerHTML;
  let maleNames = ['Kwame', 'Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'kofi'];
  let femaleNames = ['Ama', 'Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua'];
  let days = ['saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  if (siku == 5 && kim == 'male') {
    document.getElementById('akan').innerHTML = ('your name is' + ' ' + (maleNames[0]));
  } else if (siku == 6 && kim == 'male') {
    document.getElementById('akan').innerHTML = ('your name is' + ' ' + (maleNames[1]));
  } else if (siku == 0 && kim == 'male') {
    document.getElementById('akan').innerHTML = ('your name is' + ' ' + (maleNames[2]));
  } else if (siku == 1 && kim == 'male') {
    document.getElementById('akan').innerHTML = ('your name is' + ' ' + (maleNames[3]));
  } else if (siku == 2 && kim == 'male') {
    document.getElementById('akan').innerHTML = ('your name is' + ' ' + (maleNames[4]));
  } else if (siku == 3 && kim == 'male') {
    document.getElementById('akan').innerHTML = ('your name is' + ' ' + (maleNames[5]));
  } else if (siku == 4 && kim == 'male') {
    document.getElementById('akan').innerHTML = ('your name is' + ' ' + (maleNames[6]));
  };

  if (siku == 5 && kim == 'female') {
    document.getElementById('akan').innerHTML = ('your name is' + ' ' + (femaleNames[0]));
  } else if (siku == 6 && kim == 'female') {
    document.getElementById('akan').innerHTML = ('your name is' + ' ' + (femaleNames[1]));
  } else if (siku == 0 && kim == 'female') {
    document.getElementById('akan').innerHTML = ('your name is' + ' ' + (femaleNames[2]));
  } else if (siku == 1 && kim == 'female') {
    document.getElementById('akan').innerHTML = ('your name is' + ' ' + (femaleNames[3]));
  } else if (siku == 2 && kim == 'female') {
    document.getElementById('akan').innerHTML = ('your name is' + ' ' + (femaleNames[4]));
  } else if (siku == 3 && kim == 'female') {
    document.getElementById('akan').innerHTML = ('your name is' + ' ' + (femaleNames[5]))
  } else if (siku == 4 && kim == 'female') {
    document.getElementById('akan').innerHTML = ('your name is' + ' ' + (femaleNames[6]));
  };


  if (date == '' && document.getElementById('result').innerHTML == 'gender') {
    alert('please enter name and gender')
  }
  if (document.getElementById('result').innerHTML == 'gender') {
    alert('please enter gender')
  }
  if (date == '') {
    alert('please enter date!')
  };



};


