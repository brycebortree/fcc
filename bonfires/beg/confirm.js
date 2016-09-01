
function confirmEnding(str, target){
  if(str.substr(str.length - target.length, str.length) === target){
    return true;
  }
  return false;  
}

confirmEnding("Open sesame", "same");

//cleaner way
function confirmEnding(str, target){
  return str.substr(-target.length) === target; 
}