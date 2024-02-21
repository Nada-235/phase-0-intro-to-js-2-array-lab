// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
        cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
        cats.shift(name);
}

function appendCat(name) {
    const newCatsArray = [...cats];
    newCatsArray.push(name); 
    return newCatsArray;
}

function prependCat(name) {
  const newCatsArray = [...cats];
  newCatsArray.unshift(name);
    return newCatsArray;
}

function removeLastCat()
{
    const newCatsArray = [...cats];
    newCatsArray.pop();
    return newCatsArray;
}

function removeFirstCat() {
  const newCatsArray = [...cats];
  newCatsArray.shift();
  return newCatsArray;
}
// console.log(cats);
//  console.log(appendCat("Garfield"));