const obj = {
    "employees": [
        {
            "id": 1,
            "name": "Alice Johnson",
            "age": 28,
            "department": "Engineering",
            "skills": ["JavaScript", "React", "Node.js"]
        },
        {
            "id": 2,
            "name": "Bob Smith",
            "age": 34,
            "department": "Marketing",
            "skills": ["SEO", "Content Creation", "Social Media"]
        },
        {
            "id": 3,
            "name": "Charlie Brown",
            "age": 45,
            "department": "HR",
            "skills": ["Recruitment", "Employee Relations", "Training"]
        },
        {
            "id": 4,
            "name": "Diana Prince",
            "age": 30,
            "department": "Engineering",
            "skills": ["Python", "Django", "Machine Learning"]
        },
        {
            "id": 5,
            "name": "Eve Adams",
            "age": 25,
            "department": "Design",
            "skills": ["Photoshop", "Illustrator", "Figma"]
        }
    ]
};

// 1 

let employees = getNames(obj.employees);

function getNames(employees) {
    return employees.map(employee => employee.name);
}

console.log(employees)

//2

let id = prompt("Enter Id"); 

function getData(id, employees) {
    let newid = Number(id);
    let employee = employees.find(emp => emp.id === newid);

    if (employee) {
        return employee.name;
    } else {
        return null;
    }

}

console.log(getData(id, obj.employees));

// 3 // reduce is like recursive function

function sumID(employees){
    return employees.reduce((vOne,vTwo)=>vOne+vTwo.id,0);

}

console.log(sumID(obj.employees));

// 4 // Some , at least one item satisfy the condition

function ifThere(employees){
    return employees.some(emp=> emp.id > 3);
}
console.log(ifThere(obj.employees));

// includes 

function check(employees){
    return employees.some(emp=>emp.department.includes("IT"));
}

console.log(check(obj.employees));