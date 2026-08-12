const API = "http://127.0.0.1:8000/api";

// Display Students


if(document.getElementById("studentTable")){
    getStudents();
}

function getStudents(){

    fetch(API + "/students/")

    .then(response => response.json())

    .then(data =>{

        let table = document.getElementById("studentTable");

        table.innerHTML = "";
        console.log(data)
        data.forEach(student =>{

            table.innerHTML += `
                
                <tr>

                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.dept}</td>
                    <td>${student.phone}</td>
                    <td>${student.age}</td>

                    <td>
                        <a href="edit.html?id=${student.id}" class="edit-btn">
                            Edit
                        </a>
                        <button class="delete-btn" onclick="deleteStudent(${student.id})">Delete</button>
                    </td>

                </tr>

            `;

        });

    });

}



// ====================
// Add Student
// ====================

function addStudent(){

    let student = {

        name : document.getElementById("name").value,

        dept : document.getElementById("dept").value,

        phone : document.getElementById("phone").value,

        age : document.getElementById("age").value

    };

    fetch(API + "/students/add/",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(student)

    })

    .then(response => response.json())

    .then(data=>{

        window.location="index.html";

    });

}



// ====================
// Delete Student
// ====================

function deleteStudent(id){

    fetch(API + "/students/delete/" + id + "/",{

        method:"DELETE"

    })

    .then(()=>{

        getStudents();

    });

}



// ====================
// Load Student
// ====================

let id = new URLSearchParams(window.location.search).get("id");

if(document.getElementById("name") && id){
    loadStudent();
}



function loadStudent(){

    fetch(API + "/students/" + id + "/")

    .then(response => response.json())

    .then(student=>{

        document.getElementById("name").value = student.name;
        document.getElementById("dept").value = student.dept;
        document.getElementById("phone").value = student.phone;
        document.getElementById("age").value = student.age;

    });

}



// ====================
// Update Student
// ====================

function updateStudent(){

    let student={

        name : document.getElementById("name").value,

        dept : document.getElementById("dept").value,

        phone : document.getElementById("phone").value,

        age : document.getElementById("age").value

    };

    fetch(API + "/students/edit/" + id + "/",{

        method:"PUT",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(student)

    })

    .then(response => response.json())

    .then(data=>{

        window.location="index.html";

    });

}