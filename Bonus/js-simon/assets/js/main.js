/* Un alert espone 5 numeri casuali.Da li parte un timer di 30 secondi.
  Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
  Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati; */


//genera un numero casuale fra 1 e max
function rndGen(max) {
  var intNUm = Math.floor(Math.random() * max) + 1;
  // console.log(intNUm);
  return intNUm;
}

//acquisisce inpunt singolo e check se numero valido e compreso fra 1 e valore max
function getInput(max) {
  var inputNum;
  while (isNaN(inputNum) || inputNum <= 0 || inputNum > max) {
    inputNum = parseInt(prompt('Inserisci un numero valido'));
  }
  return inputNum;
}

//ritorna un array di numeri non ripetuti, di length arrSize, utilizzando una function d'ingresso che usa maxNum come parametro
//viene utilizzata sia per creare l'array di numeri random da indovinare che per l'array numeri input utente
function getNonRepArr(arrSize, maxNum, fn) {   
  var arrOut = [];
  var numIn;
  while (arrOut.length < arrSize) {
    numIn = fn(maxNum);
    if (!arrOut.includes(numIn)) {
      arrOut.push(numIn);
      // console.log('numero inserito correttamente');  //debug
    } else {
      alert('Numero gia inserito');
    }
  }
  return arrOut;
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

//inizio esecuzione programma
const numQuest = 5;
const maxNum = 100;

document.getElementById('init').addEventListener("click", function() {
  var questArr = getNonRepArr(numQuest, maxNum, rndGen);
  console.log('question random numbers: ', questArr);
  alert('I numeri casuali sono: ' + questArr.join(' '));

  setTimeout(function () {
    var inputArr = getNonRepArr(numQuest, maxNum, getInput);
    console.log('input arr ' + inputArr);
    //confronto numeri utente con numeri random iniziali
    var compareArr = compArr(questArr, inputArr);
    console.log('compare Arr ', compareArr);

    alert('Hai indovinato ' + compareArr.length + ' numeri: ' + compareArr.join(' '));
  }, 3000);  // timing ridotto per debug
})



