//new one! So many for loops
function frankenSplice(arr1, arr2, n) {
  var newArr = [];
  

  for(var i = 0; i < n; i++){
    newArr.push(arr2[i]);
  }
  for(var k = 0; k < arr1.length; k++){
    newArr.push(arr1[k]);
  }
  for(var j = n; j < (arr2.length); j++){
    newArr.push(arr2[j]);
  }
  
  return newArr;
}

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
