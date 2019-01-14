const removeFromArray = (arr, ...num) => arr.filter(item => !num.includes(item));
 

module.exports = removeFromArray
