function myFunction()
{
    var x = 10;
    var y = 20;
    var a = eval("x + y") + "<br>";
    var b = eval("2 * 2") + "<br>";
    var c = eval("y - x") + "<br>";
    var res = a + b + c ;
    document.getElementById("result").innerHTML = res;
}