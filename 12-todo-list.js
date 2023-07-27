let todo_array = ['123','qweasdzxc'];
let date_array = ['2023-07-22','2023-07-22'];



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
    console.log(todo_array);
    const input_date = document.querySelector('.js-date-input');
    const date_input = input_date.value;
    date_array.push(date_input);
    console.log(date_array);
    input_element.value = '';
    
    renderTodoList();
}

// default date
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day<10) day = "0" + day;

let today = year + "-" + month + "-" + day;
document.getElementById('theDate').value = today;