function add(a, b) {
  return a+=b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a*b
}

function divide(a, b) {
  return a/b
}

function inc(a) {
  c = ++a
return  c
}

function dec(n) {
  c = --n
return c
}

function makeInt(n) {

 var int =  parseInt(n, 10)
 return int
 }

 function preserveDecimal(n) {
   var dec = parseFloat(n)
   return dec

 }


var output = inc(4);
console.log(output)
