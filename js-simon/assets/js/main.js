/* Un alert espone 5 numeri casuali.Da li parte un timer di 30 secondi.
  Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
  Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati; */


//genera un numero casuale fra 1 e max
function rndGen(max) {
  var intNUm = Math.floor(Math.random() * max) + 1;
  // console.log(intNUm);
  return intNUm;
}

//crea un array di numeri random non ripetuti (da 1 a rangeNum) di n° elementi arrSize, utilizzando la fn rndGen
function rndArrGen(arrSize, rangeNum, randomGen) {
  var resultArr = [];
  var rndNum;
  while (resultArr.length < arrSize) {
    rndNum = randomGen(rangeNum);
    if (resultArr.includes(rndNum) === false) {
      resultArr.push(rndNum);
    }
  }
  return resultArr;
}

//confronta un array con gli elementi di un'altro: ritorna array valori trovati
function compArr(arr, matchArr) {
  var resultArr = [];
  for (var i = 0; i < matchArr.length; i++) {
    if (arr.includes(matchArr[i])) {
      resultArr.push(matchArr[i]);
    }
  }
  return resultArr;
}

const numQuest = 5;
var questArr = rndArrGen(numQuest, 100, rndGen);
console.log('question random numbers: ', questArr);

alert('I numeri casuali sono: ' + questArr.join(' '));


setTimeout(function() {
  var inputArr = [];
  for (var i = 0; i < numQuest; i++) {
    inputNum = parseInt(prompt('Inserisci il ' + (i+1) + ' numero'));
    inputArr.push(inputNum);
  } 
  console.log('input arr ' + inputArr);
  //call compArr
  var compareArr = compArr(questArr, inputArr);
  console.log('compare Arr ' , compareArr);

  alert('Hai indovinato ' + compareArr.length + ' numeri: ' + compareArr.join(' '));
}, 30000);

