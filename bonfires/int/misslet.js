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

//charcode

function fearNotLetter(str) {
  var charCodes = [];
  str = str.split("");
  
  var chars = str.map(function(letter){
    return letter.charCodeAt();
  });
  
  for(var i = 0; i < chars.length - 1; i++){
    if(chars[i + 1] !== chars[i] + 1){
      return String.fromCharCode(chars[i] + 1);
    }
  }
  
  return undefined;
  
  
}

fearNotLetter("ab");

