function generateRandomPassword() {

  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var digit = '0123456789';
  var special = '!@#$%&*+-?/.,;_';

  var lowercaseChar = lowercase.split('');
  var uppercaseChar =uppercase.split('');
  var digitChar = digit.split('');
  var specialChar = special.split('');

  var baseArray = [];

  var checkboxes = document.getElementsByName('checklist[]');
  var count = 0;

  var length = document.getElementById('length').value;

  var lengthNum = parseInt(length);
  
  for (var i = 0; i < checkboxes.length; i++) {

    if (checkboxes[i].checked) {
      count++;
    }
  }

  if (lengthNum < 8 || lengthNum > 128 ) {
    alert('Enter a number between 8 and 128');
    return
  }

  if (count === 0) {
    alert('Select at least one category.');
    return
  }

  if (document.getElementById('type1').checked === true) {
    var ranLower =[lowercaseChar[Math.floor(Math.random() * lowercaseChar.length)]];

    for (i = 1; i < lengthNum/count; i++) {
      var ranLowerCont = lowercaseChar[Math.floor(Math.random() * lowercaseChar.length)];
      var ranLowerArray = [ranLower,  ranLower.push(ranLowerCont)];
      
    }
  }


  if (document.getElementById('type2').checked === true) {
    var ranUpper =[uppercaseChar[Math.floor(Math.random() * uppercaseChar.length)]];

    for (i = 1; i < lengthNum/count; i++) {
      var ranUpperCont = uppercaseChar[Math.floor(Math.random() * uppercaseChar.length)];
      var ranUpperArray = [ranUpper,  ranUpper.push(ranUpperCont)];
      
    }
  }

  if (document.getElementById('type3').checked === true) {
    var ranDigit =[digitChar[Math.floor(Math.random() * digitChar.length)]];

    for (i = 1; i < lengthNum/count; i++) {
      var ranDigitCont = digitChar[Math.floor(Math.random() * digitChar.length)];
      var ranDigitArray = [ranDigit,  ranDigit.push(ranDigitCont)];
      
    }
  }

  if (document.getElementById('type4').checked === true) {
    var ranSpecial =[specialChar[Math.floor(Math.random() * specialChar.length)]];

    for (i = 1; i < lengthNum/count; i++) {
      var ranSpecialCont = specialChar[Math.floor(Math.random() * specialChar.length)];
      var ranSpecialArray = [ranSpecial,  ranSpecial.push(ranSpecialCont)];
      
    }
  }


  var arrayComp = baseArray.concat(ranLowerArray, ranUpperArray, ranDigitArray, ranSpecialArray);

  var arrayFlat = arrayComp.flat();

  var arrayFlatFix = arrayFlat.filter((el => typeof el === 'string'))

  var m = arrayFlatFix.length, t, i;

  while (m) {

    var i = Math.floor(Math.random() * m--);

    var t = arrayFlatFix[m];
    arrayFlatFix[m] = arrayFlatFix[i];
    arrayFlatFix[i] = t;
  }

  while (arrayFlatFix.length > lengthNum) {
    arrayFlatFix.pop();
  }

  var password = arrayFlatFix.join('');
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

  console.log(arrayFlatFix.length);

  return;
}




function openRandomQuery() {

  var formArea = document.querySelector('#formAreaRandom')

  var form = document.createElement('form');

  var lengthPrompt = document.createElement('label');
  lengthPrompt.for = 'length'
  lengthPrompt.textContent = 'Choose a length between 8 and 128 characters:';

  var lengthEnter = document.createElement('input');
  lengthEnter.type = 'text';
  lengthEnter.name = 'length';
  lengthEnter.id = 'length';

  var typeHeading = document.createElement('p');
  typeHeading.textContent = 'Choose which characters to include:'

  var typePrompt1 = document.createElement('label');
  typePrompt1.for = 'type1'
  typePrompt1.textContent = 'Lowercase letters'

  var typeEnter1 = document.createElement('input');
  typeEnter1.type = 'checkbox';
  typeEnter1.name = 'checklist[]';
  typeEnter1.id = 'type1';

  var typePrompt2 = document.createElement('label');
  typePrompt2.for = 'type2'
  typePrompt2.textContent = 'Uppercase letters'

  var typeEnter2 = document.createElement('input');
  typeEnter2.type = 'checkbox';
  typeEnter2.name = 'checklist[]';
  typeEnter2.id = 'type2';

  var typePrompt3 = document.createElement('label');
  typePrompt3.for = 'type3'
  typePrompt3.textContent = 'Digits'

  var typeEnter3 = document.createElement('input');
  typeEnter3.type = 'checkbox';
  typeEnter3.name = 'checklist[]';
  typeEnter3.id = 'type3';

  var typePrompt4 = document.createElement('label');
  typePrompt4.for = 'type4'
  typePrompt4.textContent = 'Special Characters'

  var typeEnter4 = document.createElement('input');
  typeEnter4.type = 'checkbox';
  typeEnter4.name = 'checklist[]';
  typeEnter4.id = 'type4';

  var submit = document.createElement('input');
  submit.type = 'submit';
  submit.id = 'submit';

  formArea.appendChild(form);
  form.appendChild(lengthPrompt);
  form.appendChild(lengthEnter);

  form.appendChild(typeHeading);

  form.appendChild(typePrompt1);
  form.appendChild(typeEnter1);

  form.appendChild(typePrompt2);
  form.appendChild(typeEnter2);

  form.appendChild(typePrompt3);
  form.appendChild(typeEnter3);

  form.appendChild(typePrompt4);
  form.appendChild(typeEnter4);

  form.appendChild(submit);

  submit.addEventListener('click', function(event) {
    event.preventDefault()
  });

  submit.addEventListener('click', generateRandomPassword);
}

var generateRandom = document.querySelector('#generateRandom');

generateRandom.addEventListener('click', openRandomQuery);