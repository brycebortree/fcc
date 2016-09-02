
function truncateString(str, num) {
  if (num > 3){
    if(str.length > num){
      return str.slice(0, num - 3) + "...";
    } else {
      return str;
    }
  } else {
    return str.slice(0, num) + "...";
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

//with ternary