function getNumber(num){
    var result  = document.getElementById("result");
result.value += num;
}

function clearResult(){
    var result  = document.getElementById("result");
result.value = "";
}
function getResult(){
    var result  = document.getElementById("result");
result.value = eval(result.value);
}

// function getpercentage(){
//     var percentage  = document.getElementById("percentage");
// percentage.value = eval(percentage.value);
// }

















