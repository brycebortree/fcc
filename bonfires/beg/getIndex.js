//learned compare portion!!
function getIndexToIns(arr, num) {
  arr = arr.sort(function(a, b){
    return a - b;
  });
  var i = 0;
  
  while(i < arr.length){
    if(num > arr[i]){
      i++;
    } else {
      break;
    }
  }
  return i;
}

getIndexToIns([40, 60], 50);
