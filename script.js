const display = document.querySelector('.DisplayC');
const buttons = document.querySelectorAll('.button');
let String = "";
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        
        if(e.target.innerHTML == '='){
            String = eval(String);
            display.innerHTML = String;
            String = " ";
        }
        else if(e.target.innerHTML == 'C'){
            String = "0";
            display.innerHTML = String;
        }
        else if(e.target.innerHTML == 'x'){
            String+="*";
            display.innerHTML = String;
        }
        else{
        String += e.target.innerHTML;
        display.innerHTML = String;
        }
    })
})