const formTask = document.querySelector('#form-task');
const addTask = document.querySelector('#add-task');
const clearBtn = document.querySelector('#clear');
const collection = document.querySelector('#list')


loadEventListeners();

function loadEventListeners(e){
    formTask.addEventListener('submit', getTasks);
    collection.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearAll);
}

function getTasks(e){
     
    if(addTask.value ===''){
        showAlert('Please write something on the task')
    }else{
      
        const list = document.createElement('li');
        list.className = 'list-group-item d-flex justify-content-between';
        list.appendChild(document.createTextNode(addTask.value));
        const link = document.createElement('a');
        link.className = 'delete';
        link.innerHTML = '<i class="fa fa-times"></i>';
        list.appendChild(link);
        collection.appendChild(list);
        addTask.value = '';
     
    }
    
    e.preventDefault()
  
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete')){
        e.target.parentElement.parentElement.remove()
    }
    
}

function clearAll(e){
      
    while(collection.firstElementChild){
        collection.firstChild.remove()
    }
}

function showAlert(error){
   
    const erroDiv = document.createElement('div');
    const card = document.querySelector('.card');
    const container = document.querySelector('.container');
    erroDiv.className = 'alert alert-danger';
    erroDiv.appendChild(document.createTextNode(error));
    container.insertBefore(erroDiv,card)

    setTimeout(clearError,4000)

    function clearError(){
        document.querySelector('.alert').remove()
    }
    
}















// loadEventListeners();

// function loadEventListeners(){
    
//     formTask.addEventListener('submit', getTasks);
//     collection.addEventListener('click', removeTask)
//     clearBtn.addEventListener('click', ClearAll)
// }

// function getTasks(e){
    
//     if(addTask.value === ''){
//         showAlert('Please Enter at least one sentence')
//     } else{
//     const list = document.createElement('li');
//     list.className = 'list-group-item d-flex justify-content-between align-items-center';
//     list.appendChild(document.createTextNode(addTask.value));
//     const link = document.createElement('a');
//     link.className = 'delete';
//     link.innerHTML = '<i class="fa fa-times"></i>';
//     list.appendChild(link);
//     collection.appendChild(list)

//     addTask.value = '';
    
    
// }
// e.preventDefault()
// }

// function removeTask(e){
//     if(e.target.parentElement.classList.contains('delete')){
//         alert('Are you sure')
//         e.target.parentElement.parentElement.remove()
//     }
// }

// function ClearAll(){
//     while(collection.firstChild){
//         collection.removeChild(collection.firstChild)
//     }
// }

// function showAlert(error){
    
//     const errorDiv = document.createElement('div');
//     const container = document.querySelector('.container')
//     const card = document.querySelector('.card')
//     errorDiv.className = 'alert alert-danger';
//     errorDiv.appendChild(document.createTextNode(error))
//     container.insertBefore(errorDiv,card)
    
//     setTimeout(Clearerror,3000)

//     function Clearerror(){
//         document.querySelector('.alert').remove()
//     }
    
    
// }

// list-group-item d-flex justify-content-between align-items-center
// <i class="fa fa-times"></i>