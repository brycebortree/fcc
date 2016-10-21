
function destroyer(arr) {
  var remove = Array.from(arguments);
  
  var newArr = arr.filter(function(item){
    if(remove.indexOf(item) <= -1){
      return item;
    }
  });
  
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
