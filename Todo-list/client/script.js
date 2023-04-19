
const editDelete = document.querySelector(".edit-delete");
const containerChildTaskCreate = document.getElementById("container-child-task-create");
const createTask = document.getElementById("create-task");
const inputTask = document.getElementById("input-task");
const cancelInput = document.getElementById("cancel-input");
const editBtn = document.getElementById("edit-btn");
// const editTask = document.getElementById("edit-task");


// console.log(cancelInput);
// options.addEventListener('click', () => {

//     editDelete.classList.toggle('show-edit-delete');

// })

containerChildTaskCreate.addEventListener('click', () => {
    createTask.classList.add('not-visible');
    inputTask.classList.remove('not-visible');
    cancelInput.classList.remove('not-visible')

})
cancelInput.addEventListener('click', () => {

    createTask.classList.remove('not-visible');
    inputTask.classList.add('not-visible');
    cancelInput.classList.add('not-visible')

})

// editBtn.addEventListener('click', () => {
//     editTask.classList.toggle("not-visible")
// })



