let btnToggle = document.querySelector(".sidebar-toggle");
let closeBtn = document.querySelector(".close-btn");
let sidebar = document.querySelector(".sidebar");

btnToggle.addEventListener("click",function(){
    sidebar.classList.toggle("show-sidebar");
})
closeBtn.addEventListener("click",function(){
    sidebar.classList.remove("show-sidebar");
    
})