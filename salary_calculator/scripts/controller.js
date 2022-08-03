// Input from TextBox

// Call the model


// Print the result on span tag

function compute(){
    var basicSalary= document.getElementById('salary').value;
    basicSalary=parseInt(basicSalary);

    document.getElementById('hra').innerText=salaryop.hra(basicSalary);
    document.getElementById('da').innerText=salaryop.da(basicSalary);
    document.getElementById('ta').innerText=salaryop.ta(basicSalary);
    document.getElementById('pf').innerText=salaryop.pf(basicSalary);
    document.getElementById('gs').innerText=salaryop.gs(basicSalary);
    document.getElementById('ns').innerText=salaryop.ns(basicSalary);
    
    console.log("i am computerr");
}