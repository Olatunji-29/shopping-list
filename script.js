

const allItems = [];
let afterEdit = 0;

const addItems = () => {
    let customerItems = document.getElementById("items").value;
    let showError = document.getElementById("showError")
    if(customerItems.trim() === ""){
        showError.style.display = "block"
    }

    else{
        showError.style.display = "none"
        items.value = ""; 
        allItems.push(customerItems.toLowerCase())
        toDisplay() 
    }   
}


const toDelete = (index) => {
    const confirmDelete = confirm(`Are you sure you wanna delete ${allItems[index]}`);

    if(confirmDelete){
        allItems.splice(index, 1);
        toDisplay()
    }
    else{
        toDisplay()
    }
}

const toEdit = (index) => {
    afterEdit = index;
    editInput.value = `${allItems[afterEdit]}`
}

const mainEdit = ()=> {
    if(editInput.value.trim() == ""){
        alert("Enter something")
    }
    else{
        allItems.splice(afterEdit, 1, editInput.value.toLowerCase() )
        toDisplay()

    }
}






function toDisplay() {
    showItems.innerHTML = "";
    totalCount.innerHTML = allItems.length
    listCartCount.innerHTML = allItems.length
        for(let y=0; y<allItems.length; y++){
            showItems.innerHTML += `<div class="d-flex flex-column flex-sm-row align-items-start align-items-md-center justify-content-between " >
            <p class="fs-4 fw-bold" style="color: #3da279;">${y+1}- ${allItems[y]}</p>
            <div class="d-flex align-items-center gap-3">
                <button onclick="toDelete(${y})" class="btn btn-sm btn-danger">Delete</button>
                <button onclick= "toEdit(${y})" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-sm btn-warning">Edit</button>
             </div>

            </div><br>
            `
        }
}