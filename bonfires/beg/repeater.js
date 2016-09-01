
function repeatStringNumTimes(str, num) {
  if (num > 0){
    var ans = "";
    for(var i = 0; i < num; i++){
      ans += str;
    }
    return ans;
  } else {
    return "";
  }
  
}

repeatStringNumTimes("abc", 3);

//solve recursively