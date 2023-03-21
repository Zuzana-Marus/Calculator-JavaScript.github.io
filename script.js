let val1=null,val2=null, oper=null;
/* Clear the input */
function clr(){
    let res = document.getElementById("res");
    res.value="";
    val1= val2= oper= null; 
}
/* First value */
function inval(val){
    let res = document.getElementById("res");
    res.value = res.value +val;
}
/* Choose the operator */
function inop(op){
    let res = document.getElementById("res");
    oper = op;
    val1 = parseInt(res.value);
    res.value = "";
}
/* Calculate the result */
function result(){
    switch(oper){
        case `+`:
            return val1+val2
        case `-`:
            return val1-val2;
        case `*`:
            return val1*val2;
        case `/`:
            if(val2 == 0){
                alert("Enter another value!")
            }else{
                return val1/val2;
            }
            break;
    }
}
/* Second value, write the result */
function calculate(){
    let res = document.getElementById("res");
    if((val1 == null) ||(res.value == "")){
        alert("Please enter a value!");
}else{
    val2 = parseInt(res.value);
    res.value = result();
}
}