document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("create-task-form").addEventListener('submit',(e)=>{
    e.preventDefault();
    const li = document.createElement("li");
    li.innerHTML = e.target["new-task-description"].value
    document.getElementById("tasks").append(li)
  })
});
