

function deleteListItem(){

    var list = document.getElementById("numList");
//    console.log(list.body.childNodes.length)
//
//    for (item = 0; item < list.length; item++) {
//        console.log(item)
//        if (list[item].checked == true) {
//            list.removeChild(list.childNodes[item]);
//
//        }
//    }
    //for every item in list 
    //  if list has a checked completed box:
    //      Delete task
    list.removeChild(list.childNodes[0]);
}


function addNewTask(){
    //<p id="demo"> Dummy text </p>
    //document.getElementById("demo").innerHTML = "New Text";

    //create new html tag( (Node) bold tag and 
    //a text tag then attach them to a new node 
    var list = document.getElementById("numList");
    var newNode = document.createElement("li");
    var nodeStr =  document.createTextNode("Priority: ");

    document.getElementById("list").style.fontWeight = "900";
    newNode.appendChild(nodeStr);

    //finding where to put newNode to the html code and attaching it
    var existingTag = document.getElementById("list");
    existingTag.appendChild(newNode);

    //create input type element, define element as a textbox and add a placeholder text
    var textBox = document.createElement("INPUT");
    textBox.setAttribute("type", "text");
    textBox.setAttribute("placeholder", "Enter your task here...");

    //add css code to textbox and attach textbox to newNode
    textBox.classList.add("TextBoxStyle");
    newNode.appendChild(textBox); 

    //create new text after textbox and add css ListStyle
    var nodeStr2 = document.createTextNode(" Completed? ");
    newNode.appendChild(nodeStr2);
    newNode.classList.add("ListStyle");

    var newCheckBox = document.createElement("INPUT");
    newCheckBox.setAttribute("type","checkbox");
    newNode.appendChild(newCheckBox);

    list.appendChild(newNode);
}