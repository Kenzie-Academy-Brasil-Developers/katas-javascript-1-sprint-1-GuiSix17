function oneThroughTwenty() {

  let contagem = [];

   for (let i = 1; i <= 20; i++) {
    contagem.push(i);
   }
   return contagem;
}

console.log(oneThroughTwenty());


function evensToTwenty() {

  let contagem = [];
    
   for (let i = 1; i <= 20; i += 2) {
     contagem.push(i);
   }
  return contagem;
}

 console.log(evensToTwenty());


function oddsToTwenty() {

  let contagem = [];
    
  for (let i = 1; i <= 20; i += 2) {
    contagem.push(i);
  }
   return contagem;
}

 console.log(oddsToTwenty());

  let contagem = [];


function multiplesOfFive() {
    
  for (let i = 5; i <= 100; i += 5) {
    contagem.push(i);
  }
  return contagem;
}

 console.log(multiplesOfFive());


function squareNumbers() {
  
  let contagem = [];
    for (let i = 1; i <= 10; i++) {
      contagem.push (i * i)
    }
    return contagem;
  }

  console.log(squareNumbers());


function countingBackwards() {

  let contagem = [];
    
  for (let i = 20; i >= 1; i--) {
    contagem.push(i);
  }
  return contagem;

}

 console.log(countingBackwards());


function evenNumbersBackwards() {
    
  let contagem = [];

  for (let i = 20; i >= 0; i -= 2) {
    contagem.push(i);
  }
  return contagem;

}

 console.log(evenNumbersBackwards());


function oddNumbersBackwards() {
    
  let contagem = []

  for (let i = 19; i >= 0; i -= 2) {
    contagem.push(i);
  }
  return contagem;
}

  console.log(oddNumbersBackwards());


function multiplesOfFiveBackwards() {
    
  let contagem = [];

 for (let i = 100; i >= 0; i -= 5) {
   contagem.push(i);
 }
 return contagem;
}

 console.log(multiplesOfFiveBackwards());


function squareNumbersBackwards() {

  let contagem = [];

  for (let i = 10; i >= 1; i--) {
    contagem.push(i * i);
  }
  return contagem;
}

console.log(squareNumbersBackwards())
