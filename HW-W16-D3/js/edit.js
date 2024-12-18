let addBtn = document.getElementById('addBtn');
let listBox = document.getElementById('list-box');
let newTaskInput = document.getElementById('newTask'); 

addBtn.addEventListener('click', function(event) {
    event.preventDefault();
    let toDoItem = newTaskInput.value.trim();
    if (toDoItem) {
        let createItem = createNewList(toDoItem);
        listBox.appendChild(createItem);
        newTaskInput.value = ''; 
    }
});

searchBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let search = document.getElementById('search-text');
    let items = listBox.querySelectorAll('div');

    items.forEach(function(item) {
        let paragraph = item.querySelector('p').textContent.toLowerCase();
        if (!search.value || paragraph.includes(search.value.toLowerCase())) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

function createNewList(newToDoItem) {
    let newDiv = document.createElement('div');
    let itemName = document.createElement('p');
    let deleteButton = document.createElement('button');

    newDiv.className = "newDiv";
    itemName.textContent = newToDoItem;
    deleteButton.textContent = "Өшіру";

    deleteButton.addEventListener('click', function() {
        listBox.removeChild(newDiv);
    });

    itemName.addEventListener('dblclick', function() {
        newTaskInput.value = itemName.textContent; 
        listBox.removeChild(newDiv); 
    });

    newDiv.appendChild(itemName);
    newDiv.appendChild(deleteButton);

    return newDiv;
}
