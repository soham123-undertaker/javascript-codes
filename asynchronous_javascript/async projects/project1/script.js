const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
};

let interval_id;
const startChangingColor = function(){
    if(!interval_id){
    interval_id = setInterval(changeBgColor,2000);
    }

    //randomColor() function generates a random color
    
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
}
const stopChangingColor = function(){
    clearInterval(interval_id);
    interval_id = null;
}

document.querySelector("#start").addEventListener('click',startChangingColor);

document.querySelector("#stop").addEventListener('click',stopChangingColor);