//first way through
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  var small, big, long, short;
  if(arr1.length > arr2.length){
    small = arr2.length;
    big = arr1.length;
    long = arr1;
    short = arr2;
  } else {
    small = arr1.length;
    big = arr2.length;
    long = arr2;
    short = arr1;
  }
    
  for(var i = 0; i < small; i++){
    if(long.indexOf(short[i]) === -1){
      newArr.push(short[i]);
    } 
  }
    
  for(var j = 0; j < big; j++){
   if (short.indexOf(long[j]) === -1){
      newArr.push(long[j]);
    }
  }
  
  return newArr;
}

diffArray([1, "calf", 3, "piglet"], [7, "filly"]);

//working with filter/concat.... learning filter
function diffArray(arr1, arr2) {
  var long, short;
  var garArr = [];
  var newArr = [];
  
  if(arr1.length > arr2.length){
    long = arr1;
    short = arr2;
  } else {
    long = arr2;
    short = arr1;
  }
  
  for(var i = 0; i < long.length + short.length; i++){
    if(long.indexOf(short[i]) != -1){
    garArr.push(long.slice(long.indexOf(short[i]), long.indexOf(short[i]) + 1));
    }
  }
  
  short.filter(function(arr){
    return 
    
  });
    
  newArr = long.concat(short);
  
  return garArr;
}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
