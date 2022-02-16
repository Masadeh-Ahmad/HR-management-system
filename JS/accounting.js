
function getData(){
    let parseEmployee = JSON.parse(localStorage.getItem("employee"));
    return parseEmployee;
}

function dataAnalyse(){
    let obj = {};
    let dataArr = getData();
    console.log(dataArr);
    obj.administrationCount=0;
    obj.marketingCount=0;
    obj.developmentCount=0;
    obj.financeCount=0;

    obj.administrationSalary=0;
    obj.marketingSalary=0;
    obj.developmentSalary=0;
    obj.financeSalary=0;

    for(let i of dataArr ){
        switch(i.department){
            case "Administration":
                obj.administrationCount+=1;
                obj.administrationSalary+=i.salary;
                break;
            case "Marketing":
                obj.marketingCount+=1;
                obj.marketingSalary+=i.salary;
                break;
            case "Development":
                obj.developmentCount+=1;
                obj.developmentSalary+=i.salary;
                break;
            case "Finance":
                obj.financeCount+=1;
                obj.financeSalary+=i.salary;
                break;
        }
    }
    obj.administrationAvgSalary = obj.administrationSalary/obj.administrationCount;
    obj.marketingAvgSalary = obj.marketingSalary/obj.marketingCount;
    obj.developmentAvgSalary = obj.developmentSalary/obj.developmentCount;
    obj.financeAvgSalary = obj.financeSalary/obj.financeCount;

    obj.totalEmployee = obj.administrationCount+obj.marketingCount+obj.developmentCount+obj.financeCount;
    obj.totalSlalary = obj.administrationSalary+obj.marketingSalary+obj.developmentSalary+obj.financeSalary;
    obj.totalAvgSalary = obj.totalSlalary/obj.totalEmployee;

    return obj;
}

function renderHeader(){
    let table = document.getElementById("table");
    table.setAttribute("border","1px")
    let tr = document.createElement("tr");
    table.appendChild(tr);

    let columnName = document.createElement('th');
    columnName.textContent = "Department";
    tr.appendChild(columnName);

    let columnNum = document.createElement('th');
    columnNum.textContent = "#of Employees";
    tr.appendChild(columnNum);

    let columnSalary = document.createElement('th');
    columnSalary.textContent = "Total Salary";
    tr.appendChild(columnSalary);

    let columnAvg = document.createElement('th');
    columnAvg.textContent = "Average Salary";
    tr.appendChild(columnAvg);
}

function renderRow(title,num,salary,avg){
    let table = document.getElementById("table");
    let tr = document.createElement("tr");
    table.appendChild(tr);

    let columnName = document.createElement('th');
    columnName.textContent = title;
    tr.appendChild(columnName);

    let columnNum = document.createElement('td');
    columnNum.textContent = num ;
    tr.appendChild(columnNum);

    let columnSalary = document.createElement('td');
    columnSalary.textContent = Math.round(salary);
    tr.appendChild(columnSalary);

    let columnAvg = document.createElement('td');
    columnAvg.textContent = Math.round(avg);
    tr.appendChild(columnAvg);
}

function renderBody(){
    let obj = dataAnalyse();
    renderRow("Administration",obj.administrationCount,obj.administrationSalary,obj.administrationAvgSalary);
    renderRow("Marketing",obj.marketingCount,obj.marketingSalary,obj.marketingAvgSalary);
    renderRow("Development",obj.developmentCount,obj.developmentSalary,obj.administrationAvgSalary);
    renderRow("Finance",obj.financeCount,obj.financeSalary,obj.financeAvgSalary);
}

function renderFooter(){
    let obj = dataAnalyse();
    let tr = document.createElement("tr");
    table.appendChild(tr);

    let columnName = document.createElement('th');
    columnName.textContent = "Total";
    tr.appendChild(columnName);

    let columnNum = document.createElement('th');
    columnNum.textContent = obj.totalEmployee;
    tr.appendChild(columnNum);

    let columnSalary = document.createElement('th');
    columnSalary.textContent = Math.round(obj.totalSlalary);
    tr.appendChild(columnSalary);

    let columnAvg = document.createElement('th');
    columnAvg.textContent = obj.totalAvgSalary;
    tr.appendChild(columnAvg);
}

function print(){
    renderHeader();
renderBody();
renderFooter();
}

print();


