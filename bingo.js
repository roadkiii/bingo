var usedNums = new Array(76);

function newCard() {
	//Starting loop through each square card
	for(var i=0; i < 24; i++) {  //<--always this code for loops. change in red
		setSquare(i);
	}
}

function setSquare(thisSquare) {
	var currSquare = "square"+thisSquare;
	var newNum;
	
	var colPlace =new Array(0,1,2,3,4,0,1,2,3,4,0,1,3,4,0,1,2,3,4,0,1,2,3,4);
	
	do {
    let num = getNewNum();
		newNum =(colPlace[thisSquare] * 15) + num + 1;
	}
	while (usedNums[newNum]);
	
  usedNums[newNum] = true;
  
  let squareRef = document.getElementById(currSquare);
  squareRef.innerHTML = newNum;
  
  squareRef.addEventListener('click', (e)=>{
    if(event.target.id === 'marked'){
      event.target.id = 'unmarked';
      event.target.style.backgroundColor = '#fff';
    } else {
      event.target.id = 'marked';
      event.target.style.backgroundColor = '#e74c3c'
    }
  })
}

function getNewNum() {
	return Math.floor(Math.random() * 25);
	
}

function anotherCard() {
	for(var i=1; i<usedNums.length; i++) {
	usedNums[i] = false;
	}
	
	newCard();
}