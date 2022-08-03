// hra , da, ta , gs functions

// eg.
var salaryop = {
hra(basicSalary){
    return basicSalary * 0.50;
},

da(basicSalary){
    return basicSalary * 0.20;
},

ta(basicSalary){
    return basicSalary * 0.40;
},

pf(basicSalary){
    return basicSalary * 0.05;
},

gs(basicSalary){
    return salaryop.hra(basicSalary)+ salaryop.da(basicSalary)+salaryop.ta(basicSalary);
},

ns(basicSalary){
    return salaryop.gs(basicSalary) - salaryop.pf(basicSalary);
}
}