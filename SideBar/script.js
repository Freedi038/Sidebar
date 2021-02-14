let close=document.getElementById("close");
let sidebar=document.getElementById("sidebar");
let showSidebar=document.getElementById("showSidebar");

close.addEventListener('click',function(){
    sidebar.classList.add("close")
})
showSidebar.addEventListener('click',function(){
    sidebar.classList.remove("close");
})