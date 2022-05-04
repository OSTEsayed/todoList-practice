document.addEventListener('DOMContentLoaded', () => {
    // get all the html elemnts
    const inputElm = document.getElementById('input') //input feild
    const ulTasks = document.getElementById('tasks') // ul element 
    const ulEndsTasks = document.getElementById('complete-tasks') // ul element for completed-tasks
    const liTasks = document.querySelectorAll('.tasks-todo') // li element for the tasks
    const liendTask = document.querySelectorAll('.end-todo') // li element for the completed tasks
    
    // buttons
    const addBtn = document.getElementById('add-btn') // button for adding tasks
    const clearBtn = document.getElementById('clear-btn') // button for clear the local storage
    

    let arr = []
    //check the input and  make a variable for localstorage parameter
    let val = ''
    inputElm.addEventListener('input',()=>{
        if(inputElm.value.length !== 0){
            document.getElementById('alrt').classList.remove('alert') //remove the alert in input is not empty
        }
        val = inputElm.value
        console.log(inputElm.value)
    })
    
    // on click at add will add the task you inputed
    addBtn.addEventListener('click',addtheTask)
    // on click at clear all will clear the data from local storage and from todo tasks
    clearBtn.addEventListener('click',removeall)

    function removeall(){
        localStorage.clear()
    }
    
    function addtheTask(){
        if(inputElm.value.length === 0){
            document.getElementById('alrt').classList.add('alert')
        }else{
            localStorage.setItem(val, inputElm.value)
            document.getElementById('alrt').classList.remove('alert')
            // ulTasks.innerHTML += `<li class="tasks-todo">
            // <p class="text-style">${localStorage.getItem(val)}</p>
            // <i class="ri-delete-bin-2-line primary-icon"></i>
            // </li>`
            let li = document.createElement("li")
            li.className = 'tasks-todo'
            let p = document.createElement("p")
            let text = document.createTextNode(inputElm.value)
            p.appendChild(text)
            p.className = "text-style"
            let i = document.createElement("i")
            i.className = "ri-delete-bin-2-line primary-icon"
            li.appendChild(p)
            li.appendChild(i)
            ulTasks.appendChild(li)
            arr.push(inputElm.value)
            console.log(arr)
        }
    }

    // make the trash icone work
    document.addEventListener('click', e =>{
    if (e.target.classList.contains('primary-icon')){
        e.target.parentNode.remove()
    }})

    // //remove frome today tasks and add to completed tasks
    liTasks.forEach(task=>{
        task.addEventListener('click',endtheTask)       
    })

    function endtheTask(){
            //mouving the task froum today task into completed tasks 
                this.remove()
                let li = document.createElement("li")
                li.className = 'end-todo'
                let p = document.createElement("p")
                let text = document.createTextNode(this.textContent)
                p.appendChild(text)
                p.className = "text-style"
                let i = document.createElement("i")
                i.className = "ri-arrow-go-back-line secoundary-icon"
                li.appendChild(p)
                li.appendChild(i)
                ulEndsTasks.appendChild(li)
                console.log(this.textContent)      
    }
    // //remove frome completed tasks and add to today tasks
    liendTask.forEach(task=>{
        task.addEventListener('click',resetTask)       
    })

    function resetTask(){
        this.remove()
        let li = document.createElement("li")
        li.className = 'tasks-todo'
        let p = document.createElement("p")
        let text = document.createTextNode(this.textContent)
        p.appendChild(text)
        p.className = "text-style"
        let i = document.createElement("i")
        i.className = "ri-delete-bin-2-line primary-icon"
        li.appendChild(p)
        li.appendChild(i)
        ulTasks.appendChild(li)
        console.log(this.textContent)
    }
    })



