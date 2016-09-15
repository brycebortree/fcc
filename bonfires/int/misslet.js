// double for loop way
function fearNotLetter(str) {
  var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
  
  for(var i = 0; i < str.length; i++){
    if(abc[i] === str[0]){
      for(var j = i; j < abc.length; j++){
        if(abc[i + j] !== str[j]){
          return abc[i+j];
        }
      }
    }
    return undefined;
  } 
}

fearNotLetter("abce");
