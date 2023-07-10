const header = document.querySelector("header")
window.addEventListener("scroll",function(){
    header.classList.toggle ("sticky", window.scrolly>100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = ()=> {
};
menu.addEventListener('click',()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
    console.log('llll')

})

window.onscroll = ()=> {
menu.classList.remove('bx-x');
navlist.classList.remove('open');  
};

const themechanger = document.querySelector('.moon')
let isDark = true;

themechanger.addEventListener('click',()=>{
    if(isDark){
        isDark = false
        document.documentElement.style.setProperty('--bg-color', 'white');
        document.documentElement.style.setProperty('--second-bg-color','#ccc');

        document.documentElement.style.setProperty('--text-color', '#ffffff');
        document.documentElement.style.setProperty('--main-color', 'red');
        document.documentElement.style.setProperty('--text-color', 'black');
        document.documentElement.style.setProperty('--text-color', 'black');
        document.documentElement.style.setProperty('--text-color', 'black');
        document.documentElement.style.setProperty('--text-color', 'black');
    }
    else{
        isDark = true
        document.documentElement.style.setProperty('--bg-color', '#2a2a2a');
        document.documentElement.style.setProperty('--second-bg-color', '#202020');
        document.documentElement.style.setProperty('--text-color', 'white');
    }
    console.log(isDark)
})