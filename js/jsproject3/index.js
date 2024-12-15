
const body = document.querySelector("body");
const container = document.getElementById("container");
const tasksBox = document.getElementById("main__allTasks");
const submitBtn = document.getElementById("btn");
const textArea = document.getElementById("header__textArea");
const serch__input = document.getElementById("serch__input");
const serch__btn = document.getElementById("serch__btn");
let taskArray = JSON.parse(localStorage.getItem("tasks")) || [];
let newTaskArray = [];
let id;


//                 פונקצייה לאתחול ה id של המשימות
function initId() {

    const storedId = JSON.parse(localStorage.getItem("id"));
    if (id === null) {

        id = 0;
        localStorage.setItem("id",JSON.stringify(id));
        console.log(`id state: ${id}`);
        
    } else {
        id = storedId;
        console.log(`ID '${storedId}' saved succesfully!`);      
    }
    
}
//                  מאתחל את ה id של המשימות
initId();
//                  פונקצייה שמדפיסה את מערך המשימות
function printTasks(array) {

    tasksBox.innerHTML = "";

    array.forEach((element) => {
        
        const task = document.createElement("div");
        const time = document.createElement("div");

        task.className = "task";
        element.isComplited == true? task.className = "pssedTasks": console.log("");
        ;
        
        time.className = "time";

        task.textContent = `${JSON.stringify(`${element.content}`)}`;
        time.textContent = `${element.time}`;
        task.appendChild(time);

        const remuveButton = document.createElement("button");
        const passButton = document.createElement("button");

        remuveButton.className = "remuveBtn";
        passButton.className = "passBtn";

        remuveButton.id = element.id;  
        passButton.id = element.id;  
       
        remuveButton.textContent="Remuve";
        passButton.textContent="Pass";
       
        //                 פונקציה למחיקת משימות פר משימה
     remuveButton.onclick =  () => {

        if (confirm("Are sure you want to remove this task?")) {

            console.log(`Remuve task '${remuveButton.id}'`);
       
            taskArray = taskArray.filter((t) => t.id !== parseInt(element.id));
            localStorage.setItem("tasks",JSON.stringify(taskArray));

        } else {
            console.log("remove canceled!");
            
        }
        
        printTasks(taskArray);
        
    }
    
    passButton.onclick = ()=>{
            element.isComplited = !element.isComplited;
            localStorage.setItem("tasks",JSON.stringify(taskArray));
    }

        task.appendChild(passButton);
        task.appendChild(remuveButton);
        tasksBox.appendChild(task);

    });     
       
}
//                  מדפיסה את מערך המשימות בעת פתיחת הדף
printTasks(taskArray);
//                   מציג את מערך המשימות בקונסול
console.log(taskArray);
//                  פונקצייה שמפעילה את הכפתור בלחיצה על Enter
textArea.addEventListener("keypress",function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        submitBtn.click();
    }
});
//                   פונקציה שמפעילה את כפתור עדכון מערך המשימות עם משימה חדשה
submitBtn.onclick = function action(){

    if (textArea.value === "") {
        alert("Enter task");
        
    } else {
    
        id = id + 1;
        localStorage.setItem("id",JSON.stringify(id))
        let taskBody = {
            id:id,
            isComplited:false,
            time: new Date().toLocaleString("en-US", {
                dateStyle: "medium",
                timeStyle: "short",
            }),
            content: textArea.value
        }
        taskArray.push(taskBody);
        localStorage.setItem("tasks",JSON.stringify(taskArray));

        textArea.value = "";
        
    }
    printTasks(taskArray);
    
}
//                  פונקצייה שמפעילה את כפתור של מחיקת כל המשימות
document.getElementById("clearBtn").onclick = ()=>  {

    if (confirm("Are you sure you want to remove all tasks??")) {
        localStorage.clear();
    
        localStorage.setItem("id",0);
        id = 0;
        taskArray.length = 0;
        textArea.value = "";
        console.log("Clear all tasks!");
    
    } else {
        console.log("Remove canceled!");
        
    }
    
}
//                  הפעלת חיפוש באמצעות לחיצה על Serch
function playSerch() {
    if(serch__input.value === ""){
        alert("Enter serch!")

    }else{
        serch();

        serch__input.value = "";
    }
    
}
serch__btn.onclick = playSerch;
//                  פונקצייה לחיפוש תווים במשימות
function serch() {
    let char = serch__input.value;
    console.log(`The char you serch is: ${char}`);

    newTaskArray = taskArray.filter(task => task.content.includes(char) || task.time.includes(char));

    if (newTaskArray.length > 0) {

        console.log(newTaskArray);
        printTasks(newTaskArray);

    } else {
        alert(`There is not '${char}' in the task list`);
        printTasks(taskArray);
    }
    
    
}
//                  הפעלת חיפוש באמצעות Enter
serch__input.addEventListener("keypress",function(event){
    if (event.key === "Enter"){
        event.preventDefault();

        if(serch__input.value === ""){
            alert("Enter serch!")
    
        }else{
            serch();

            serch__input.value = "";
        }
    }
    
});
//                  מאפשר לראות את המשימות בחזרה לאחר חיפוש ע"י לחיצה מחוץ לאיזור המשימות
body.addEventListener("click",(e)=>{
    e.stopPropagation();
    if (serch__input.value == "") {
        printTasks(taskArray);
        console.log("Refreshd!");
        
    } else {
        console.log("Not refreshd!");
    }
});


