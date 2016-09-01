// without a for loop
//may include spaces or numbers
function palindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^0-9a-z]/gi, '');

  var st = 0; 
  var end = str.length - 1;
  
  while(st < end){
    if(str[st] !== str[end]){
      return false;
    }
    st++;
    end--;
  }
  return true;
}

palindrome("_eye");

//look into doing this recursively!
//hint: use slice;