var allNumbers = [];

function createNumbersArray(){
  for(let i = 0; i < 65; i++){
    allNumbers.push(i);
  }
}

createNumbersArray();

document.getElementsByClassName('btn')[0].addEventListener('click', () => {
  var item = allNumbers[Math.floor(Math.random() * allNumbers.length)]

  
  document.getElementById('number').innerHTML = item;

  allNumbers.splice(allNumbers.indexOf(item),1);

  document.getElementById('numbers').innerHTML = document.getElementById('numbers').innerHTML + item + ', ';
})

