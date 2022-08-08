var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}
function readFormData(){
    var formData = {};
    formData["Enterid"] = document.getElementById("Enterid").value;
    formData["Entername"] = document.getElementById("Entername").value;
    formData["age"] = document.getElementById("age").value;
    formData["address"] = document.getElementById("address").value;
    formData["subject"] = document.getElementById("subject").value;
    formData["result"] = document.getElementById("result").value;
    return formData;
}
function insertNewRecord(data){
    var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.Enterid;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.Entername;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.age;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.address;
    var cell4 = newRow.insertCell(4);
        cell4.innerHTML = data.subject;
     var cell4 = newRow.insertCell(5);
        cell4.innerHTML = data.result;
    var cell5 = newRow.insertCell(6);
        cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
}
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('Enterid').value = selectedRow.cells[0].innerHTML;
    document.getElementById('Entername').value = selectedRow.cells[1].innerHTML;
    document.getElementById('age').value = selectedRow.cells[2].innerHTML;
    document.getElementById('address').value = selectedRow.cells[3].innerHTML;
    document.getElementById('subject').value = selectedRow.cells[4].innerHTML;
    document.getElementById('result').value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.Enterid;
    selectedRow.cells[1].innerHTML = formData.Entername;
    selectedRow.cells[2].innerHTML = formData.age;
    selectedRow.cells[3].innerHTML = formData.address;
    selectedRow.cells[4].innerHTML = formData.subject;
    selectedRow.cells[5].innerHTML = formData.result;
}
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('studentList').deleteRow(row.rowIndex);
    }
    resetForm();
}
function resetForm(){
    document.getElementById('Enterid').value = '';
    document.getElementById('Entername').value = '';
    document.getElementById('age').value = '';
    document.getElementById('address').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('result').value = '';
}
