var addition = document.querySelector(".plusBtn");
var del = document.querySelectorAll(".trash");
var val = document.querySelector("#todo");
var todoList = document.querySelector(".list");
var counter = 1;

function createMission()
{
    // variables that used for create to do in list (Mission), Text to do, button delete , button if i done the task
    var Mission = document.createElement("div");
    var content_todo = document.createElement("h3");
    var createDelete = document.createElement("div");
    var createDone = document.createElement("div");
    

    todoList.appendChild(Mission);
    Mission.classList.add('mission','col-xxl-12','col-10','my-4',"undone");
    
    Mission.appendChild(content_todo);
    val.setAttribute('value',val.value);
    content_todo.innerText = val.value;

    createDelete.classList.add('trash');
    createDelete.id = "delete"+counter;
    Mission.appendChild(createDelete);
    createDelete.innerHTML = '<i class="fas fa-trash-alt"></i>';
    
    createDone.classList.add('comp');
    createDone.id = "done"+counter;
    Mission.appendChild(createDone);
    createDone.innerHTML = '<i class="fas fa-check-square"></i>';
    
    counter++;

}

function addMission ()
{
    createMission();
}

function completeFunc(event)
{
    var list = document.querySelectorAll('.mission');
    var CompId = event.target.id;
    for(var i in list)
    {
        if(CompId === document.querySelectorAll('.comp')[i].id)
        {
            list[i].style.cssText = "background-color:rgb(100, 100, 100); text-decoration: line-through;";
            list[i].classList.remove("undone");
            list[i].classList.add("done");
            break;
        }
        else
            continue;
    }


}

function deleteFunc (event)
{
    var list = document.querySelectorAll('.mission');
    var deleteId = event.target.id;
    for(var i in list)
    {
        if(deleteId === document.querySelectorAll('.trash')[i].id)
        {
            list[i].remove();
            break;
        }
        else
            continue;
    }
}

   
function selectFunc()
{
    if(document.querySelectorAll('option')[2].selected)
    {
        var list = document.querySelectorAll('.mission');
        for(var i = 0 ; i < list.length ;i++) 
        {
            if(list[i].classList[4] === "undone")
            {
                list[i].style.cssText ="display:none;";
            }
            else
            {
                list[i].style.cssText ="display:block; background-color:rgb(100, 100, 100); text-decoration: line-through;";
            }
        }
    }

    else if(document.querySelectorAll('option')[1].selected)
    {
        var list = document.querySelectorAll('.mission');
        for(var i = 0 ; i < list.length ;i++)
        {
            if(list[i].classList[4] === "done")
            {
                list[i].style.cssText ="display:none;";
            }
            else
            {
                list[i].style.cssText ="display:block;";
            }
        }
    }

    else if(document.querySelectorAll('option')[0].selected)
    {
        var list = document.querySelectorAll('.mission');
        for(var i = 0 ; i < list.length ;i++)
        {
            if(list[i].classList[4] === "done")
            {
                list[i].style.cssText ="display:block; background-color:rgb(100, 100, 100); text-decoration: line-through;";
            }

            else if(list[i].classList[4] === "undone")
            {
                list[i].style.cssText ="display:block;";
            }
        }
    }
}
    


addition.addEventListener("click",addMission);
todoList.addEventListener("click",completeFunc); 
todoList.addEventListener('click',deleteFunc)
document.querySelector('select').addEventListener('click',selectFunc)
