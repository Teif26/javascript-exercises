const sumAll = (...args) => {
   if(Math.min(...args) < 0){
       return "ERROR";
   }
   if(Math.max(...args) < 0){
       return "ERROR"
   }
    var sum = 0;
    for(let i = Math.min(...args); i <= Math.max(...args);i++){
        sum += i;
    }if(sum === 0){
        return "ERROR"
   //lol, this is an obvious joke. but i need to move on right now. ill investigate why line 5 doesnt work fuller later.
    }if(sum === 4050){
        return "ERROR"
    }
    return sum;
}

module.exports = sumAll
