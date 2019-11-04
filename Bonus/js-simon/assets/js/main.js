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

//acquisisce inpunt singolo e check se numero valido e compreso fra 1 e MaxNum
function getInput() {
  var inputNum;
  while (isNaN(inputNum) || inputNum <= 0 || inputNum > 100) {
    inputNum = parseInt(prompt('Inserisci un numero valido'));
  }
  return inputNum;
}

//acquisisce dati utente n° numQuestion, numeri non ripetuti tramite prompt e restituisce arr
function getMultInput(numQ) {
  var arr = [];
  var num;
  while (arr.length < numQ) {
    num = getInput();
    if (!arr.includes(num)) {
      arr.push(num);
      console.log('numero inserito correttamente');  //debug
    } else {
      alert('Numero gia inserito');
    }
  }
  return arr;
}

//

//inizio programma
const numQuest = 5;
const maxNum = 100;
var questArr = rndArrGen(numQuest, maxNum, rndGen);
console.log('question random numbers: ', questArr);

alert('I numeri casuali sono: ' + questArr.join(' '));



setTimeout(function() {
  var inputArr = getMultInput(numQuest);
  console.log('input arr ' + inputArr);
  //confronto numeri utente con numeri random iniziali
  var compareArr = compArr(questArr, inputArr);
  console.log('compare Arr ' , compareArr);

  alert('Hai indovinato ' + compareArr.length + ' numeri: ' + compareArr.join(' '));
}, 3000);  // timing ridotto per debug
