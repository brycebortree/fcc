function bouncer(arr) {
  var newArr = arr.filter(function(item){
    if(item !== false){
      return item;
    }
  });
 
  return newArr;
}

bouncer([7, "ate", "", false, 9]);
