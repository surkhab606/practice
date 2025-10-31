function confirmEnding(str, check) {
  let checklength = check.length;
  let endIndex = str.length - checklength;
  console.log()
  if(str.substring(endIndex) == check) {
    return true 
  }
  else {
    return false 
  }
}

let strr = "Congratulation";
let checkk = "on";


//created a function that does the same thing as the .endsWith() method, but by myself
