//sandwich calculator

function sandwichcalculator(bread, cheese){
    if(bread%2==0){
        var ch=bread/2;
        if(cheese<=ch){
            console.log(cheese + " sandwhichs can be made.");
        }
        else
            console.log(ch + " sandwichs can be made.");
    }
    else
        console.log("Enter even number of bread slices.");
}
var bread = prompt("Enter the number of bread slices you have: ", " ");
var cheese = prompt("Enter the number of cheese of slices: ", " ");
sandwichcalculator(bread, cheese);