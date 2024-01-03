let target1 = document.querySelector('.sub-menu');
let target2 = document.querySelector('.developer');
let menu = document.querySelector('#menu');
let sidebar = document.querySelector('.sideBar');


target1.addEventListener('mouseenter' , function(){
    target2.classList.add('coder')
     
})


target1.addEventListener('mouseleave' , function(){
    target2.classList.remove('coder')
     
})

function showsidebar(){
    const sidebar = document.querySelector('.sideBar');
    sidebar.style.display = 'flex'
}

function hidesidebar(){
    const sidebar = document.querySelector('.sideBar');
    sidebar.style.display = 'none'
}

// Select some classes for adding functionality

let lines = document.getElementById('line');

lines.addEventListener('click',()=>{
    console.log('checked')
})



