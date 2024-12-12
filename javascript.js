const menuTogle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuTogle.addEventListener('click',()=>{
    sidebar.classList.toggle('visible');
    sidebar.classList.toggle('hidden');
    sidebar.classList.toggle('close');
    

})
