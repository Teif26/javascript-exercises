function add (num1,num2) {
	if(num1<0 || num2<0){
		 alert("only positive numbers")};
	let sum = num1 + num2;
	return sum;
}

function subtract (num1,num2) {
	let final = num1 - num2;
	return final;
}

function sum (...args) {
	let final = [];
	let argsArray = Array.from(...args);
	if(!Array.isArray(argsArray) || !argsArray.length){
		return 0;
	}else{
	 final = (argsArray.reduce((a,b) => a + b));
	return final;
    }
	
}

  function multiply(...args) {
	let final = [];
	let argsArray = Array.from(...args);
	if(!Array.isArray(argsArray) || !argsArray.length){
		return 0;
	}else{
	 final = (argsArray.reduce((a,b) => a * b));
	return final;
}
  }

   function power(a,b) {
	return Math.pow(a,b)
   }

   function factorial(num){
   let final = 0;
	if(num === 0 || num === 1){
		return 1;
	}else{
	final =	 num * factorial(num -1)
	return final
	}
     
}

    module.exports = {
    	add,
    	subtract,
    	sum,
    	multiply,
        power,
    	factorial
    }