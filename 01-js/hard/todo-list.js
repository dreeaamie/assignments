/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

<!DOCTYPE html>
<html>
<head>
<style>
body, html{
margin: 0;
padding: 0;
height: 100%;}
.div1{
height:100%;

background-color:red;
  display:flex;
  justify-content:center;
  align-items: center;
}
.div2{
background-color: white;
height:200px;
width:400px;
margin:50px;
text-align:center;
}

#inputbox{
width:250px;
height:20px
}
ul li{
list-style:none;
text-align:left;
padding-left:30px;
position:relative;
}
ul li::before{
content:'';
position:absolute;
background-image:url(radio-button.png);
background-size:cover;
background-position:center;
width:20px;
height:20px;
left: 8px;
}

ul li.checked{
    color:#555;
  
}
ul li.checked::before{
    background-image:url(tick-mark.png);

}
ul li span{
    top: -10px;
    position:absolute;
    right:50px;
    height: 40px;
    width:40px;
    color:black;
    font-size: 22px;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
}
ul li span:hover{
    background: #edeefe ; ;
}
</style>
</head>
<body>
<div class="div1">
<div class="div2">
<h1>to do app</h1>
<input id="inputbox" placeholder="enter task">
<button onclick="addli()">add</button>
<button onclick="deleteall()">delete all</button>
<div>
<ul id="list">
<li>task <button onclick="edit()" class="edits">edit</button></li>

</ul>
</div>
</div>
</div>
<script>

let inputbox=document.getElementById("inputbox");
let list=document.getElementById("list");
let edits=document.getElementsByClassName("edits");
function addli(){
if(inputbox.value===''){
alert("you must write something");
}
else{
let li=document.createElement("li");
li.innerHTML=inputbox.value;
list.appendChild(li);
let span =document.createElement("span");
span.innerHTML="\u00d7";
li.appendChild(span);
// let edit=document.createElement("button");
// edit.innerHTML="edit";
// li.appendChild(edit);
// edit.classList.add('edits');
}
inputbox.value='';
save();
}

list.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
   save()
    }
    else if(e.target.tagName==="SPAN"){
e.target.parentElement.remove();
save()   
}
// else if(e.target.tagName==="")
},false);

function save(){
    localStorage.setItem("data",list.innerHTML)
}
 function show(){
    list.innerHTML=localStorage.getItem("data");
 }
 show();

 function deleteall(){
    list.innerHTML='';
 }

//  function edit(){
//     edits.innerText="save";
//     list.innerText=inputbox.value;
//  };
</script>
</body>
</html>

module.exports = Todo;
