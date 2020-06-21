const list = document.querySelector('#item-list ul')

list.addEventListener('click',function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})

//search

const searchBar = document.forms["search"].querySelector('input[type="text"]');

searchBar.addEventListener("keyup",function(e){
    const term = e.target.value.toLowerCase();
    const items = list.getElementsByTagName('li');

    Array.from(items).forEach(function(item){
        const title = item.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            item.style.display = "block";
        }else{
            item.style.display ="none";
        }
    })
    
})

//hide items

const checkBox = document.querySelector("#hide");

checkBox.addEventListener("change",function(e){
    if(checkBox.checked){
        list.style.display = "none";
    }else{
        list.style.display = "initial";
    }
})


//add items

const addForm=document.forms["add"];

addForm.addEventListener('submit',function(e){
    e.preventDefault();

    const value = addForm.querySelector('input[type="text"]').value;
  
    const li = document.createElement('li')
    const itemName = document.createElement('span');
    const btn = document.createElement('span');
  
    itemName.textContent = value;
    btn.textContent = 'Delete';
    
    itemName.className="name";
    btn.className="delete";
if(value == ""){
    alert("Enter the item name");
}
else{
    li.appendChild(itemName);
    li.appendChild(btn);
    list.appendChild(li); 
  
}

})
