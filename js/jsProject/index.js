
const body = document.getElementById("body");
const header__Btn = document.getElementById("header__Btn");
const main__toDo = document.getElementById("main__toDo");
const header_taskName = document.getElementById("header_taskName").value;
const header__textArea = document.getElementById("header__textArea").value;

let items = [{
    name:"By a car",
    content:"Go serch for a car"
},{
    name:"fix engine",
    content:"Go fix the engine"

}]


function renderData() {
    const toDoTasks = document.getElementById("main__tasks");
    
    items.forEach(items =>{

        const task = document.createElement("div");
        const taskName = document.createElement('span');
        const taskContent = document.createElement("p");

        taskName.textContent = `Name:${items.name}`
        taskContent.textContent = `content:${items.content}`

        task.appendChild(taskName);
        task.appendChild(taskContent);
        toDoTasks.appendChild(task)

    })
    

    
}
renderData()




    



    

//  function cont() {
    
//     fetch("./toDo.json")
// .then(Response => Response.json())
// .then(value =>  value.forEach(value=>{

//     const task = document.createElement('div');
//     task.className = 'littleTask';

//     const task_Name = document.createElement("span");
//     const task_Content = document.createElement("p");

//     task_Name.textContent = `Name: ${value.name}`;
//     task_Content.textContent = `Content: ${value.content}`;

//     task.appendChild(task_Name);
//     task.appendChild(task_Content);
//     toDoTasks.appendChild(task);


// }))}

// cont();