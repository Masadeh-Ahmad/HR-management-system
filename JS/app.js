'use strict';
var allEmployee = [];
function Employee(employeeID,fullName,department,level,gender){
    this.employeeID=employeeID;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageURL=`./assets/${gender}.png`;;
    this.salary=0;
    allEmployee.push(this);
};
Employee.prototype.randomSalary=function(level){
    if(level=="Junior"){
        return Math.floor(Math.random() * (1000 - 500 + 1) + 500);
    }
    if(level=="Mid-Senior"){
        return Math.floor(Math.random() * (1500 - 1000 + 1) + 1000);
    }
    if(level=="Senior"){
        return Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);
    }

}
Employee.prototype.calculatSalary=function(){
    let random=this.randomSalary(this.level)
    this.salary = random-=random*0.075;
}
Employee.prototype.render=function(){
    document.write(`<div class="employee"><br><img class="icon" src="${this.imageURL}"></img><br><div>`);
    document.write(`<h1>${this.fullName[0]+" "+this.fullName[1]+"<br> Salary "+this.salary}</h1><div>`);
}

let ghazi = new Employee(1000,["Ghazi","Samer"],"Administration","Senior","male");
ghazi.calculatSalary();
let lana  = new Employee(1000,["Lana","Alipe"],"Finance","Senior","female");
lana.calculatSalary();
let tamara  = new Employee(1000,["Tamara","Ayoub"],"Marketing","Mid-Senior","female");
tamara.calculatSalary();
let safi = new Employee(1000,["Safi","Walid"],"Administration","Mid-Senior","male");
safi.calculatSalary();
let omar = new Employee(1000,["Omar","Zaid"],"Development","Senior","male");
omar.calculatSalary();
let rana = new Employee(1000,["Rana","Saleh"],"Development","Junior","female");
rana.calculatSalary();
let hadi = new Employee(1000,["Hadi","Ahmad"],"Finance","Mid-Senior","male");
hadi.calculatSalary();

for (let i = 0; i < allEmployee.length; i++) {
    allEmployee[i].render();
}
