var arr = [10 , 284 , 26737 , 937 , 1 , 98];
document.getElementById("output").innerHTML = "Original Array" + arr;
function ascending()
{
   arr.sort(function (a,b) {return a-b});
   document.getElementById("output1").innerHTML = "ascending array " + arr;
}
function descending()
{
    arr.sort(function (a,b) {return b-a});
    document.getElementById("output2").innerHTML = "descending array " + arr;
}