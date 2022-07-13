export const funPercent = (event) => {
    const display = document.querySelector('#display');
    display.value = display.value / 100;
};

export const funClear = (event) =>{
    const display = document.querySelector('#display');
    display.value = 0;
};

export const funDelete = (event) =>{
    const display = document.querySelector('#display');
    display.value = display.value.substring(0, display.value.length-1);  
};

export const funNumber = (event) => {

    const display = document.querySelector('#display');
     if(display.value !== '0'){
        display.value = display.value + event.target.innerHTML;
     }else{
         display.value = event.target.innerHTML;
     }
};

export const funOperation = (event) =>{
    const display = document.querySelector('#display');
    try{
        display.value = eval(display.value);
    }catch(err){
        console.log(err);
    }
};

export const funChange = (event) =>{
    const display = document.querySelector('#display');
    display.value = display.value * -1;  
};