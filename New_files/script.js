

document.addEventListener('DOMContentLoaded', () => {
 //Function for optimisation the code for li task eventadds(doesn't work for now)
    // document.querySelectorAll(".main")[0].addEventListener(onchange,()=>{
        // liTasks = document.querySelectorAll('.tasks-todo') // li element for the tasks
        // liendTask = document.querySelectorAll('.end-todo') // li element for the completed tasks
      
        // liTasks.forEach(task=>{
        //     task.addEventListener('click',endtheTask)       
        // })
        // liendTask.forEach(task=>{
        //     task.addEventListener('click',resetTask)       
        // })
    //    });
    // get all the html elemnts
    let inputElm = document.getElementById('input') //input feild
    let ulTasks = document.getElementById('tasks') // ul element 
    let ulEndsTasks = document.getElementById('complete-tasks') // ul element for completed-tasks
    let liTasks = document.querySelectorAll('.tasks-todo') // li element for the tasks
    let liendTask = document.querySelectorAll('.end-todo') // li element for the completed tasks
   for(let i = 0; i < liTasks.length; i++)
{
  console.log(liTasks[i]);
}
    // buttons
    let addBtn = document.getElementById('add-btn') // button for adding tasks
    let clearBtn = document.getElementById('clear-btn') // button for clear the local storage
    

    let arr = []
    //check the input and  make a variable for localstorage parameter
    let val = ''
    inputElm.addEventListener('input',()=>{
        if(inputElm.value.length !== 0){
            document.getElementById('alrt').classList.remove('alert') //remove the alert in input is not empty
        }
        val = inputElm.value
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
            //arr.push(inputElm.value)
            liTasks = document.querySelectorAll('.tasks-todo') // li element for the tasks
            liendTask = document.querySelectorAll('.end-todo') // li element for the completed tasks
          
            liTasks.forEach(task=>{
                let children = task.childNodes;

                children[0].addEventListener('click',endtheTask)   
                console.log(children[0])    
        })
            liendTask.forEach(task=>{
                task.addEventListener('click',resetTask)            
            })
        
        }
    }

    // make the trash icone work
    document.addEventListener('click', e =>{
    if (e.target.classList.contains('primary-icon')){
        e.target.parentNode.remove()
    }})
    

    // //remove frome today tasks and add to completed tasks
    liTasks = document.querySelectorAll('.tasks-todo') // li element for the tasks
    liendTask = document.querySelectorAll('.end-todo') // li element for the completed tasks
  
    liTasks.forEach(task=>{
        let children = task.childNodes;

        children[1].addEventListener('click',endtheTask)   
    })

    function endtheTask(){
            //mouving the task froum today task into completed tasks 
                this.parentNode.remove()
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
                liTasks = document.querySelectorAll('.tasks-todo') // li element for the tasks
            liendTask = document.querySelectorAll('.end-todo') // li element for the completed tasks
          
            liTasks.forEach(task=>{
                let children = task.childNodes;

                children[0].addEventListener('click',endtheTask)       
        })
            liendTask.forEach(task=>{
        task.addEventListener('click',resetTask)            
                
})   
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
        liTasks = document.querySelectorAll('.tasks-todo') // li element for the tasks
            liendTask = document.querySelectorAll('.end-todo') // li element for the completed tasks
          
            liTasks.forEach(task=>{
                let children = task.childNodes;

                children[0].addEventListener('click',endtheTask)       
           })
            liendTask.forEach(task=>{
                task.addEventListener('click',resetTask)            

            })
    }
    })



