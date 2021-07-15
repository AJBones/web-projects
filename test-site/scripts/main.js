let myImage = document.querySelector('img'); // Selects images in document

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/biochemistry.jpg') { // Specifies which image to change
    myImage.setAttribute('src', 'images/dna.jpg'); // Specifies path to second image
  } else {
    myImage.setAttribute('src', 'images/biochemistry.jpg'); // Otherwise, as image must already be changed, revert to first image
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Alexander welcomes you, ' + myName;
}
