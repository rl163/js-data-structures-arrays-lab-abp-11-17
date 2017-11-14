// Write your solution here!
const drivers = ["Milo","Otis","Garfield"];
//appends a driver to the end of the drivers array
function destructivelyAppendDriver (name){
  drivers.push(name);
}
//prepends a driver to the beginning of the drivers array
function destructivelyPrependDriver (name) {
  drivers.unshift(name);
}
//removes the last driver from the drivers array
function destructivelyRemoveLastDriver() {
  drivers.pop()
}
//removes the first driver from drivers array
function destructivelyRemoveFirstDriver(){
  drivers.shift()
}
//appends a driver to the drivers array and returns a new array, leaving the drivers array unchanged
function appendDriver(name){
  return [...drivers,name];
}
//prepends a driver to the drivers array and returns a new array, leaving the drivers array unchanged
function prependDriver(name){
  return [name,...drivers];
}
//removes the last driver in the drivers array and returns a new array, leaving the drivers array unchanged
function removeLastdriver(){
  return drivers.slice()
}