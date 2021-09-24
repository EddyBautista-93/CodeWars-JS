const findShort = (s) => {
    var sArray = s.split(' ');
    var shortestWord = sArray[0].length;
    for(let i = 0; i < sArray.length; i++){
        if(sArray[i].length < shortestWord){
            shortestWord = sArray[i].length;
        }
    }
    return shortestWord;
}

// one line fun 
const findShortOneLine = (s) =>  Math.min.apply(null, s.split(' ').map(w => w.length));
  
findShort("bitcoin take over the world maybe who knows perhaps");