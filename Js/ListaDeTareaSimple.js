function addTask() {
                 let taskInput = document.getElementById('taskInput');
                let taskText = taskInput.value.trim();
                if (taskText === '') return; 
                    let taskList = document.getElementById('taskList');
                    let newTask = document.createElement("li");
                    newTask.textContent = taskText;
                    newTask.onclick = function() {    
                    this.classList.toggle('completed');
                        updatePendingCount();
                    };
                    
                   taskList.appendChild(newTask);
                   taskInput.value = "";
                   updatePendingCount();
        
                function updatePendingCount() {
                let tasks = document.querySelectorAll('#taskList li');
                let pendingTasks = Array.from(tasks).filter(task => !task.classList.contains("completed")).length;
                 document.getElementById('pendingCount').textContent = pendingTasks; // Usar pendingTasks correctamente
              }
                    
            }