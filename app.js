document.addEventListener('DOMContentLoaded', function() {
	const list = document.querySelector('#todo-list ul');

// delete todos
list.addEventListener('click', function(e) {
	if (e.target.className == 'delete') {
		const li = e.target.parentElement;
		list.removeChild(li);
	}
});

// add todo-list
const addForm = document.forms['add-todo'];

addForm.addEventListener('submit', function(e) {
	e.preventDefault();
	const value = addForm.querySelector('input[type="text"]').value;

	// create elements
	const li = document.createElement('li');
	const todoName = document.createElement('span');
	const deleteBtn = document.createElement('span');

	//add content
	deleteBtn.textContent = 'delete';
	todoName.textContent = value;

	// add classes
	todoName.classList.add('name');
	deleteBtn.classList.add('delete');

	// append to document
	li.appendChild(todoName);
	li.appendChild(deleteBtn);
	list.appendChild(li);	
})

 // hide todos
 const hideBox = document.querySelector('#hide');
 hideBox.addEventListener('change', function(e) {
 	if (hideBox.checked) {
 		list.style.display = "none";
 	} else {
 		list.style.display = "initial";  
 	}
 })

// filter todos
const searchBar = document.forms['search-todos'].querySelector('input');
searchBar.addEventListener("keyup", function(e) {
	const term = e.target.value.toLowerCase();
	const todos = list.getElementsByTagName("li");
	Array.from(todos).forEach(function(todo) {
		const title = todo.firstElementChild.textContent;
		if (title.toLowerCase().indexOf(term) != -1) {
			todo.style.display = 'block';
		} else {
			todo.style.display = 'none';
		}
	})
})

// tabbed Content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener("click", function(e) {
	if(e.target.tagName == "LI") {
		const targetPanel = document.querySelector(e.target.dataset.target);
		panels.forEach(function(panel) {
			if (panel == targetPanel) {
				panel.classList.add('active');
			} else {
				panel.classList.remove('active');
			}
		})
	}
})
})















