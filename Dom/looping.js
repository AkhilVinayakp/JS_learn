
let keykaps = document.querySelectorAll('.key');
pre = "white"
setInterval(()=>{            
    for(let key_ of keykaps){
        current_class = key_.className;
        current_color = current_class.replace('key', '').trim();
        key_.classList.remove(current_color)
        key_.classList.add(pre);
        pre=current_color;
}
},200)
