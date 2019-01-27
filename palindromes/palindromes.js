const palindromes = function(str) {
let newArr = str.toLowerCase().split("").reverse().join("").replace(/[^a-z]/g,"")
let newStr = str.toLowerCase().replace(/[^a-z]/g,"")
for(let i=0;i<newArr.length;i++){
    if(newArr[i]===newStr[i]){
        return true
    }else{
        return false
    }
}

}
//console.log(palindromes('A car, a man, a maraca.'))
module.exports = palindromes
