/* const table = [
    {
        name:"Dakshith",
        age:"20",
        college:"SSCE",
        department: "ECE",
        skills:"Java"
    },
    {
        name:"Riyan",
        age:"20",
        college:"SSCE",
        department: "EEE",
        skills:"C++"
    },
    {
        name:"Liba",
        age:"21",
        college:"SSCE",
        department: "CSE",
        skills:"Python"
    },
    {
        name:"Raj",
        age:"18",
        college:"SSCE",
        department: "IT",
        skills:"React"
    },
    {
        name:"Akash",
        age:"19",
        college:"SSCE",
        department: "Mech",
        skills:"NodeJs"
    },
    {
        name:"Nanthini",
        age:"20",
        college:"SSCE",
        department: "EEE",
        skills:"Photoshop"
    },
    {
        name:"Dakshith",
        age:"21",
        college:"SSCE",
        department: "CSE",
        skills:"Javascript"
    },
    {
        name:"Akash",
        age:"22",
        college:"SSCE",
        department: "IT",
        skills:"Kotlin"
    },
    {
        name:"Gupta",
        age:"22",
        college:"SSCE",
        department: "IT",
        skills:"MATLAB"
    },
    {
        name:"Meera",
        age:"21",
        college:"SSCE",
        department: "CSE",
        skills:"Quantum computing"
    },
    {
        name:"Divya",
        age:"20",
        college:"SSCE",
        department: "IT",
        skills:"Cloud"
    },
    {
        name:"Sabari",
        age:"18",
        college:"SSCE",
        department: "CSE",
        skills:"CSS"
    },
    {
        name:"Gayathri",
        age:"19",
        college:"SSCE",
        department: "IT",
        skills:"HTML"
    },
    {
        name:"Ram",
        age:"18",
        college:"SSCE",
        department: "CSE",
        skills:"Java"
    }
] */



const search = document.querySelector('.filter-input');
const output = document.querySelector('.output');

window.addEventListener('DOMContentLoaded', loadTable);
search.addEventListener('input', filter);


function loadTable(){


    let temp = display(table);
    output.innerHTML = temp;
}

function filter(e){
    let results;
    let temp = '';

    results = table.filter(item => 
        
        item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.age.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.college.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.department.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.skills.toLowerCase().includes(e.target.value.toLowerCase())
        );

    if(results.length > 0){
       

        temp = display(results);
    }
    else{
        temp = `<div class="no-item">Item Not Found</div>`
    }

    output.innerHTML = temp;
}

function display(iteratorObject){
    let temp2 = `<table><tr>`;
    tableHeader.forEach(header => temp2+=`<th>${header.toUpperCase()}</th>`)
    temp2+=`</tr>`
    iteratorObject.forEach(row =>{
        temp2 += `
        <tr>
            <td>${row.name}</td>
            <td>${row.age}</td>
            <td>${row.college}</td>
            <td>${row.department}</td>
            <td>${row.skills}</td>
        </tr>
        `
    })
    temp2 += `</table>`;

    return temp2;

}

