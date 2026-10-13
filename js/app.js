// localStorage.clear();

let studentList = JSON.parse(localStorage.getItem("studentList")) || [];

let student = {
    id :"",
    name :"",
    age: "",
    address :""
}

function btnAddStudent() {

    let checkId = document.getElementById("txtId").value.trim();

    if(checkId === ""){
        alert("No Values Entered");

    }else if(studentList.some(student => student.id === checkId)){
        alert("Student ID Already Exists");

    }else{

        let student = {
            id: checkId,
            name: document.getElementById("txtName").value,
            age: document.getElementById("txtAge").value,
            address: document.getElementById("txtAddress").value
        };

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

function btnUpdateStudent(){
    let checkId = document.getElementById("txtId").value;

    let student = studentList.find(s => s.id===checkId);

    if(student){
        student.name=document.getElementById("txtName").value;
        student.age=document.getElementById("txtAge").value;
        student.address=document.getElementById("txtAddress").value;

        localStorage.setItem("studentList", JSON.stringify(studentList));
    }else{
        alert("Student Not Found");
    }
}



