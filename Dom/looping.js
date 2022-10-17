let run_configs = {
    light_speed: 200,
}


let keykaps = document.querySelectorAll('.key');
pre = "white"
let bg_ch_button = document.querySelector('#bgchanger');
let sp_ch_button = document.querySelector("#spchanger")
let sp_ch_button_inv = document.querySelector("#spchanger_inv")
let sp_meeter = document.querySelector('.current_speed');
sp_meeter.innerHTML = `current speed ${run_configs.light_speed}`


bg_ch_button.addEventListener('click', ()=>{
    rand_rgbs = gen_random_rgb();
    document.body.style.backgroundColor = rand_rgbs.color;
    bg_ch_button.style.backgroundColor = rand_rgbs.invColor;
    bg_ch_button.style.color = rand_rgbs.color;
    sp_ch_button.style.color = rand_rgbs.color;
    sp_ch_button_inv.style.color = rand_rgbs.color;

});

sp_ch_button.addEventListener('click', ()=>{
    run_configs.light_speed = run_configs.light_speed + 25;

    clearInterval();
    start_lightning();
    sp_meeter.innerHTML = `current speed ${run_configs.light_speed}`
    if(run_configs.light_speed > 1000){
        run_configs.light_speed = 0;
        clearInterval();
    }
});

sp_ch_button_inv.addEventListener('click', ()=>{
    if(run_configs.light_speed > 0){
        run_configs.light_speed = run_configs.light_speed - 25;
        clearInterval();
        start_lightning();
        sp_meeter.innerHTML = `current speed ${run_configs.light_speed}`
    }
});

const random = (number)=>{
    return Math.floor(Math.random()*(number+1))
}

const gen_random_rgb = ()=>{
    c1 = random(255);
    c1_inv = 255 - c1;
    c2 = random(255);
    c2_inv = 255 - c2;
    c3 = random(255);
    c3_inv = 255 - c3;
    return {
        'color': `rgb(${c1}, ${c2}, ${c3})`,
        'invColor': `rgb(${c1_inv}, ${c2_inv}, ${c3_inv})`
    }
}

function start_lightning(){
    setInterval(()=>{            
        for(let key_ of keykaps){
            current_class = key_.className;
            current_color = current_class.replace('key', '').trim();
            key_.classList.remove(current_color)
            key_.classList.add(pre);
            pre=current_color;
    }
    }, run_configs.light_speed);
}

start_lightning();