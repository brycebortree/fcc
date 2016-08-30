// for loop way
function factorialize(num) {
  var answer = 1;
  
  if(num < 2){
    return 1;
  }
  
  for(var i = 2; i <= num; i++){
     answer= answer * i;
  }

  return answer;
}

factorialize(5);
