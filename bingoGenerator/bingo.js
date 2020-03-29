var allNumbers = [];

var drawn = 0;

var chosenNrRef = document.getElementById('number');
var drawnNrsRef = document.getElementById('numbers');


function createNumbersArray(){
  for(let i = 1; i < 51 ; i++){
    if(i < 11){
      allNumbers.push('B ' + i);
    } else if(i > 10 && i < 21){
      allNumbers.push('I ' + i);
    } else if(i > 20 && i < 31){
      allNumbers.push('N ' + i);
    } else if(i > 30 && i < 41){
      allNumbers.push('G ' + i);
    } else if(i > 40 && i < 51){
      allNumbers.push('O ' + i);
    }
  }

}

createNumbersArray();

document.body.addEventListener('click', () => {
  var item = allNumbers[Math.floor(Math.random() * allNumbers.length)]
  allNumbers.splice(allNumbers.indexOf(item),1);

  let loop = 0;

  if(allNumbers.length > 0){
    chosenNrRef.style.color = '#b2bec3';

    var myVar = setInterval(myTimer, 120);
  }

  function myTimer() {
    chosenNrRef.innerHTML = allNumbers[Math.floor(Math.random() * allNumbers.length)];
    
    loop ++;

    if(loop === 10){
      chosenNrRef.innerHTML = item;
      chosenNrRef.style.color = '#ffeaa7';

      let newNrSpan = document.createElement('span');
      newNrSpan.innerHTML = item.replace(/ /g,'');
      newNrSpan.className = 'nr-span';

      drawnNrsRef.appendChild(newNrSpan);
      newNrSpan.addEventListener('click', (e)=>{
        e.stopPropagation();
        e.target.style.backgroundColor = '#0984e3';
      })
      // drawnNrsRef.innerHTML = drawnNrsRef.innerHTML + item.replace(/ /g,'') + ', ';

      drawn ++;
      document.getElementById('drawn').innerHTML = drawn;

      myStopFunction();
    }
  }

  function myStopFunction() {
    clearInterval(myVar);
  }
})

