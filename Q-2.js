//Week in human life
function birth(d, m){
    var today = new Date();
    if(today.getDate()==d && today.getMonth()==m-1){
        console.log("Happy Birhtday!");
    }
    else{
        console.log("No Birthday");
    }
}
var d = prompt("Whats your Birth date?"," ");
var m = prompt("Whats your Birth month?"," ");
birth(d, m);