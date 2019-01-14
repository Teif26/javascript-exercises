const repeatString = (str,num) => {

if(num < 0){
    return "ERROR";
};

if(num === 0){
return "" ;
};
if(num === 1){
    return str;
}else {
    return str + repeatString(str, num - 1);
};

 
};
module.exports = repeatString
