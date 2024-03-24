//Solution
//prompts to request the user to enter the basic salary and benefits.
let basicSalary = parseFloat(prompt('Enter your basic Salary'));
let benefits = parseFloat(prompt('Enter your total benefits'));

// function to calculate the total gross salary. adds the basic salary and the benefits.
function grossSalary(basicSal ,  benefit){
    return basicSal + benefit;
//returns gross salary
};
grossSalary(basicSalary, benefits);



//function to calculate nhif deductions based on the different salary grades.
function nhifdecuctions(salary){
    let deductions;
    if (salary < 6000) {
        deductions = 150;
    } else if (salary < 8000) {
        deductions = 300;
    } else if (salary < 12000) {
        deductions = 400;
    } else if (salary < 15000) {
        deductions = 500;
    } else if ( salary < 20000){
        deductions = 600;
    } else if (salary < 25000) {
        deductions = 750;
    } else if (salary < 30000) {
        deductions = 850;
    } else if (salary < 35000) {
        deductions = 950;
    } else if (salary < 40000) {
        deductions = 1000;
    } else if (salary < 50000) {
        deductions = 1100;
    } else if (salary < 60000) {
        deductions = 1200;
    } else if (salary < 70000) {
        deductions = 1300;
    } else if (salary < 80000) {
        deductions = 1400;
    } else if (salary < 90000) {
        deductions = 1500;
    } else if (salary < 100000) {
        deductions = 1600;
    } else {
        deductions = 1700;
    };
//returns deductions
    return deductions;
};
nhifdecuctions(grossSalary);


//A function to calculate the taxable income by deducting the nhif contribution
const taxablePay = function(Salary){
    const nssfcontribution = 1080;
    amountToTax = Salary - nssfcontribution;
//returns the amount to tax
    return amountToTax;
}
taxablePay(grossSalary);

///function to calculate payee.
function payeeCalculator(s){
    const personalRelief = 2400;
    const insuaranceRelief = 5000;
    let payee;
//Condition to get payee for different salary grades.
    if (s <= 24000) {
        payee = parseFloat(s * 0.01);
    } else if (s < 32334) {
        payee = parseFloat(s * 0.25);

    }else if (s < 500001) {
        payee = parseFloat(s * 0.3);
    } else if (s < 800001) {
        payee = parseFloat(s * 0.325);
    } else {
        payee = parseFloat(s * 0.35);
    };
//returns the payee
    return payee - personalRelief - insuaranceRelief;

 
};
payeeCalculator(taxablePay);

//function to calculate the net salary
// passing other functions as variables
function netsalary(){
    netsal = taxablePay - payeeCalculator - nhifdecuctions;
    return netsal;
//returns net salary
};
netsalary();
