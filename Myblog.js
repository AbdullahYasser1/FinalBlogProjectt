function addItem(list, inputField ) { 
  var list = document.getElementById('list');
  var listItem = document.createElement("li");
  listItem.setAttribute("class", "p");
  var text = document.getElementById('text').value;       
  listItem.innerText =  inputField.value; 
    
        listItem.innerHTML =    text +'<br>'  + "<p>" + inputField.value + "</p>" + "<br>" + "<button type='submit' class='btn btn-dark'>Read More</button>" ;
    
    

  list.appendChild(listItem);
  
  return false; 
    
    
}