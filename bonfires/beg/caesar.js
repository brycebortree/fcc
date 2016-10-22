function rot13(str) { // LBH QVQ VG!
  str = str.split("");
  console.log(str);
  var newStr = [],
      temp;
  
  for(var i = 0; i < str.length; i++){
    temp = str.charCodeAt(i);
    newStr.push(temp);
  }
  
  for(var j = 0; j < charCodes.length; j++){
    if(charCodes[j] < 77){
      newStr.push((j + 13));
    } else {
      newStr.push((j - 13));
    }
  }
  
  newStr = newStr.join();
  var answer = String.fromCharCode(newStr);
  
  return answer;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");