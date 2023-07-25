let todo_array = window.localStorage.getItem('items')?
JSON.parse(localStorage.getItem('items')):[];
let date_array = window.localStorage.getItem('dates')?
JSON.parse(localStorage.getItem('dates')):[];



renderTodoList()
function renderTodoList(){
    let todoListHTML = ''; 

    // for (let i =0;i<todo_array.length;i++ ) {
    //     const todo = todo_array[i];
    //     const dt = date_array[i]
    //     const html = `
    //         <div>
    //         ${todo}</div>
    //         <div>${dt}</div>
    //         <button onclick="
    //             todo_array.splice(${i},1);
    //             date_array.splice(${i},1);
    //             renderTodoList();
    //         " class="delete-todo-button">Delete</button>
            

    //         `;
    //     todoListHTML += html;
    // }

    todo_array.forEach(function(todo,i){
        // const todo = todo_array[i];
        const dt = date_array[i]
        const html = `
            <div>
            ${todo}</div>
            <div>${dt}</div>
            <button 
            // onclick="
            //     todo_array.splice(${i},1);
            //     date_array.splice(${i},1);
            //     renderTodoList();
            // " 
            class="delete-todo-button js-delete-todo-button">Delete</button>
            `;
        todoListHTML += html;
    })

    document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-todo-button')
        .forEach((deleteButton,i) => {
            deleteButton.addEventListener('click',()=>{
                // console.log(i);
                console.log(localStorage.getItem('items'))
                console.log(localStorage.getItem('dates'))
                localStorage.removeItem('items').splice(i,1);
                localStorage.removeItem('dates').splice(i,1);
                todo_array.splice(i,1);
                date_array.splice(i,1);
                renderTodoList();
            })
        });
    
    
}

document.querySelector('.js-add-todo-button')
.addEventListener('click',() => {
    add_todo_event();
});



function add_todo_event() {
        
    const input_element = document.querySelector('.js-name-input');
    const todo_input = input_element.value;
    todo_array.push(todo_input);
    localStorage.setItem('items',JSON.stringify(todo_array));
    console.log(todo_array);
    const input_date = document.querySelector('.js-date-input');
    const date_input = input_date.value;
    date_array.push(date_input);
    localStorage.setItem('dates',JSON.stringify(date_array));
    console.log(date_array);
    input_element.value = '';
    
    renderTodoList();
}

// default date in the date field
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day<10) day = "0" + day;

let today = year + "-" + month + "-" + day;
document.getElementById('theDate').value = today;