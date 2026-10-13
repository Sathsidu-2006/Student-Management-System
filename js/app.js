// localStorage.clear();

let studentList = JSON.parse(localStorage.getItem("studentList")) || [];

let student = {
    id :"",
    name :"",
    age: "",
    address :""
}

function btnAddStudent() {

    let checkId = document.getElementById("txtId").value;

    if (checkId === student.id) {
       alert("Student Id Is Already Exists");
    }else{
        
        student = {
            id: document.getElementById("txtId").value,
            name: document.getElementById("txtName").value,
            age: document.getElementById("txtAge").value,
            address: document.getElementById("txtAddress").value
        }
        studentList.push(student);
        localStorage.setItem("studentList", JSON.stringify(studentList));

        alert("Student Added Successfully...");
    }

}

function btnSearchStudent(){

    let checkId = document.getElementById("txtId").value;

    let student = studentList.find(s => s.id===checkId);

    if(student){
        document.getElementById("txtName").value=student.name;
        document.getElementById("txtAge").value=student.age;
        document.getElementById("txtAddress").value=student.address;
    }else{
        alert("Student Not Found");
    }
}

