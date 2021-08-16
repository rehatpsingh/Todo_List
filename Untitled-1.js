function update(){
  var up_id=document.getElementById("UpdateTaskId").value;
  var up_name=document.getElementById("UpdateTaskName").value;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    "id": up_id,
    "name": up_name,
    "isComplete": true
  });
  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  fetch("https://localhost:44377/api/TODO/"+up_id, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
function Del(){
  var raw = "";
  var DeleteId= document.getElementById("DeleteTaskId").value;
var requestOptions = {
  method: 'DELETE',
  body: raw,
  redirect: 'follow'
};
fetch("https://localhost:44377/api/TODO/"+DeleteId, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
function reloadButton(){
  window.location.reload();
}
function postButton(){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var pos=document.getElementById("TextAdd").value;
  var raw = JSON.stringify({
    "name": pos,
    "iscomplete": true
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("https://localhost:44377/api/TODO/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

const api_url = 
      "https://localhost:44377/api/todo";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>ID</th>
          <th>NAME</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data) {
        tab += `<tr> 
    <td>${r.id} </td>
    <td>${r.name}</td>
         
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
}

