/* Un alert espone 5 numeri casuali.Da li parte un timer di 30 secondi.
  Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
  Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati; */


//genera un numero casuale fra 1 e max
function rndGen(max) {
  var intNUm = Math.floor(Math.random() * max) + 1;
  // console.log(intNUm);
  return intNUm;
}

//crea un array di numeri random non ripetuti (da 1 a rangeNum) di n° elementi arrSize
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

var questionNums = rndArrGen(5, 100, rndGen);
console.log('question numbers: ', questionNums);

alert('I numeri casuali sono: ' + questionNums.join(' '));