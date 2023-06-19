//setear los todos en su lugar
(function(){
    console.log("Loading... data list");

    let todos = document.querySelector("#todo");
    let tasks_in_progress = document.querySelector("#tasks_in_progress");
    let completed_tasks = document.querySelector("#completed_tasks");

    let keys = new Array();
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    
    if (tasks!== null) {
          keys = Object.keys(tasks);
    }

    let validation =
      keys.length > 0 &&
      todos.childElementCount === 1 &&
      tasks_in_progress.childElementCount === 1 &&
      completed_tasks.childElementCount === 1;
  
    if (validation) {
      for (let task in tasks) {
        //check
        let id = crypto.randomUUID();
        let label = document.createElement("label");
        label.setAttribute("for", `check_${id}`);  
        label.className = tasks[task].status;  
        label.innerHTML = `<input type="checkbox" id="check_${id}">
        <span>${tasks[task].push}</span>`;
  
        if (tasks[task].status === "pending_tasks") {
          todos.appendChild(label);
        }
  
        if (tasks[task].status === "progress_tasks") {
          tasks_in_progress.appendChild(label);
        }
  
        if (tasks[task].status === "completed") {
          completed_tasks.appendChild(label);
        }
      }
    }
})();

// Set TODO in list one element
function setToDoInList(tasks){

  let todos = document.querySelector("#todo");
  let id = crypto.randomUUID();
  let label = document.createElement("label");
  label.setAttribute("for", `check_${id}`);
  label.className = tasks.status; 
  label.innerHTML = `<input type="checkbox" id="check_${id}">
  <span>${tasks.push}</span>`;
  todos.appendChild(label);
  location.reload(); // force reload

};


// Created TODO:
const create = document.querySelector("#push");
create.addEventListener("click", () => {
  //verification task in local storage
  let push = document.querySelector("#input").value.trim();
  push = push.toLowerCase();
  let task = localStorage.getItem("tasks");

  if (task === null) {
    //if tasks is null is created
    localStorage.setItem("tasks", JSON.stringify({})); //tasks is created
  }

  // take tasks in localStorage
  let tasks = JSON.parse(localStorage.getItem("tasks"));

  let keys = Object.keys(tasks);

  //validar que no envien una tarea sin titulo y que no se repitan
  if (push !== "" && !keys.includes(push)) {
    tasks[push] = { push, date: new Date(), status: "pending_tasks" };
    //saving tasks
    localStorage.setItem("tasks", JSON.stringify(tasks));

    setToDoInList(tasks[push]);
    document.querySelector("#input").value = "";

  } else {
    alert("Task in list");
    document.querySelector("#input").value = "";
  }
});


//Move task in progress list
  const checks = document.querySelectorAll(".pending_tasks"); 
  checks.forEach(check => {
    check.addEventListener("click", () => { 
        let listChaild = check.children; 
        let task = listChaild[1].innerText; // search task list
        //saving news status 
        let tasks = JSON.parse(localStorage.getItem("tasks"));

        if(tasks[task].status === "pending_tasks") {
          tasks[task].status = "progress_tasks";
        }

        localStorage.setItem("tasks", JSON.stringify(tasks));
        location.reload(); // force reload  
    }); 
}); 


//Move task completed list
const checked = document.querySelectorAll('.progress_tasks');
checked.forEach(check => {
  check.addEventListener("click", () => { 
      let listChaild = check.children; 
      let task = listChaild[1].innerText; // search task list
      //get task list
      let tasks = JSON.parse(localStorage.getItem("tasks"));

      if(tasks[task].status === "progress_tasks") { 
        tasks[task].status = "completed";
      }

      localStorage.setItem("tasks", JSON.stringify(tasks));
      location.reload(); // force reload  
  }); 
}); 


//delete tasks 
const deletedTask = document.querySelectorAll(".completed"); 
  deletedTask.forEach(deleteTask => {
    deleteTask.addEventListener("click", () => {
      let listChaild = deleteTask.children; 
      let task = listChaild[1].innerText;
      //get task list
      let tasks = JSON.parse(localStorage.getItem("tasks"));
      // delete task
      delete tasks[task]; 

      localStorage.setItem("tasks", JSON.stringify(tasks));
      location.reload(); // force reload
    });
  }); 

