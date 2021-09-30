// Given a string of digits, you should replace any digit below 5 with '0'
// and any digit 5 and above with '1'. Return the resulting string.

const fakeBin = (x) => {
    var tmp = '';
    for(var i = 0; i < x.length; i++){
      if(x[i] < '5')tmp += '0';
      else if(x[i] >= '5')tmp += '1';
    }
    return tmp;
    
}

fakeBin("45385593107843568");