const sumAll = (...args) => {
   if(Math.min(...args) < 0){
       return "ERROR";
   }
  
    var sum = 0;
    for(let i = Math.min(...args); i <= Math.max(...args);i++){
        sum += i;
    }
    return sum;
}

module.exports = sumAll
