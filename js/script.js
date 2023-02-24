const items = document.querySelector('.items');
let isDown = false;
let StartX;
let leftScroll;

items.addEventListener('mousemove',(e)=>{
    if (isDown){
        //console.log(items.scrollLeft);
        const x = e.pageX - items.offsetLeft;
        const walk = (x - StartX)*3;
        items.scrollLeft = leftScroll - walk;
    }
})
items.addEventListener('wheel',(e)=>{
        //console.log(e);
        items.style.scrollBehavior =`smooth`
        items.classList.add('active');
        leftScroll = items.scrollLeft;
        const x = screenLeft - items.offsetLeft;
        const walk =(x - e.deltaY)*3;
        items.scrollLeft = leftScroll - walk;
})
items.addEventListener('mousedown',(e)=>{
    items.classList.add('active');
    isDown =true;
    //console,console.log(items.offsetLeft);
    leftScroll = items.scrollLeft;
    StartX = e.pageX;
    items.style.scrollBehavior =`unset`;

})
items.addEventListener('mouseup',()=>{
    items.classList.remove('active');
    isDown = false;
})
items.addEventListener('mouseleave',()=>{
    items.classList.remove('active');
    isDown = false;
})
items.addEventListener('scrollend',(e)=>{
    items.classList.remove('active');
    console.log(e)
})