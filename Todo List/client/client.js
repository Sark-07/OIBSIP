
const InputTask = document.getElementById('input-task');
const taskName = document.getElementById('task-name');
const CancelInput = document.getElementById("cancel-input");
const childHolder = document.querySelector(".child-holder");
const alert = document.querySelector(".alert");
const enterAlert = document.querySelector('.enter-alert')
const options = document.querySelector(".options");
const editTask = document.querySelector(".edit-task");
const newTask = document.querySelector(".new-task");
const submitEditedTask = document.querySelector(".submit-edited-task");
const alerth4 = document.querySelector(".alert-h4");
const cancelBtn = document.querySelector(".cancel-input");

// get data
let items
const getDATA = async () => {
    try {
        const { data: { Items } } = await axios.get('http://127.0.0.1:3000/api/v1/items');

        items = Items
        if (Items.length < 1) {

            childHolder.innerHTML = `<h4>Task List Empty.</h4>`;
            return
        }

        const data = Items.map((data) => {
            const { TaskName, _id, completed } = data;
            return `
                <div class="container-child">
                 <div class="task">
                 <i class="fas fa-cube task-icon"></i>
                 <!-- <i class="fas fa-tasks task-icon"></i> -->
                 <span>${TaskName}</span>
                 </div>
                 <div class="edit-btn">
                        <input id="${_id}" class="edit-btn"  type="button" value="Edit">
                    </div>
                 <div class="completed">
                 <label for="completed">completed</label>
                    <input class="completed" type="checkbox" ${completed} name="completed" id="${_id}">
                    </div>
                 <div class="options">
                 <i id="${_id}" class="fas fa-trash"></i>
                </div>
                </div>`
        }).join('')
        childHolder.innerHTML = data;

    } catch (error) {
        childHolder.innerHTML = '<h5>There was an error, please try later....</h5>'
        console.log(error)
    }
}

getDATA()


// post data

InputTask.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (taskName.value === '') {

        enterAlert.style.display = 'block';

        setTimeout(() => {

            enterAlert.style.display = 'none';

        }, 3000)

    }
    if (taskName.value.length > 1) {
        try {
            const TaskName = taskName.value
            await axios.post('http://127.0.0.1:3000/api/v1/items', { TaskName })
            getDATA()
            taskName.value = ''

            alert.style.display = 'block'
            alert.textContent = `Task added`

        } catch (error) {
            console.log(error);
            alert.style.display = 'block'
            alert.textContent = `Error, try after some time.`
        }
        setTimeout(() => {

            alert.style.display = 'none'
        }, 3000);
    }

})


// delete data

childHolder.addEventListener('click', async (e) => {
    // console.log(e.target.id);

    if (e.target.className.includes('fas')) {
        console.log(e.target.id);
        try {
            await axios.delete(`http://127.0.0.1:3000/api/v1/items/${e.target.id}`)
            getDATA()

        } catch (error) {
            console.log(error);
        }
    }

    else if (e.target.className.includes("completed")) {

        console.log(e.target.id);
        try {

            if (e.target.hasAttribute("checked")) {
                e.target.removeAttribute("checked")

                const completed = ""
                await axios.patch(`http://127.0.0.1:3000/api/v1/items/${e.target.id}`, { completed })

            } else {
                const completed = "checked"
                e.target.setAttribute("checked", "true")
                // e.target.checked = false
                await axios.patch(`http://127.0.0.1:3000/api/v1/items/${e.target.id}`, { completed })
            }
        } catch (error) {

            console.log(error);
        }

    }
    else if (e.target.className === 'edit-btn') {

        editTask.classList.remove("not-visible")

        editTask.addEventListener('click', async (el) => {
            el.preventDefault()

            const TaskName = newTask.value;

            if (el.target.className == "submit-edited-task" && newTask.value === '') {
                submitEditedTask.classList.add("not-visible")
                newTask.classList.add("not-visible")
                cancelBtn.classList.add("not-visible")
                alerth4.style.display = 'block'
                alerth4.textContent = `Please add something.`
                setTimeout(() => {
                    alerth4.style.display = 'none'
                    submitEditedTask.classList.remove("not-visible")
                    newTask.classList.remove("not-visible")
                    cancelBtn.classList.remove("not-visible")
                }, 3000);
            }

            else if (el.target.className == "submit-edited-task" && TaskName.length > 1) {

                try {
                    await axios.patch(`http://127.0.0.1:3000/api/v1/items/${e.target.id}`, { TaskName })
                    getDATA()
                    newTask.value = ''
                    submitEditedTask.classList.add("not-visible")
                    newTask.classList.add("not-visible")
                    cancelBtn.classList.add("not-visible")
                    alerth4.style.display = 'block'
                    alerth4.textContent = `Task edited succesfully`


                } catch (error) {
                    console.log(error);
                    submitEditedTask.classList.add("not-visible")
                    newTask.classList.add("not-visible")
                    cancelBtn.classList.add("not-visible")
                    alerth4.style.display = 'block'
                    alerth4.textContent = `Some error occured.`

                }
                setTimeout(() => {
                    alerth4.style.display = 'none'
                    editTask.classList.add("not-visible")
                    submitEditedTask.classList.remove("not-visible")
                    newTask.classList.remove("not-visible")
                    cancelBtn.classList.remove("not-visible")

                }, 3000);
            }

            else if (el.target.className == "cancel-input") {
                editTask.classList.add("not-visible")
                newTask.value = ""
            }

        })
    }
    // else if (e.target.className.includes("cancel-input")) {
    //     editTask.classList.add("not-visible")
    //     console.log("true");
    // }
})

// path data

