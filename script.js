const display = document.querySelector('.DisplayC');
const buttons = document.querySelectorAll('.button');
let String = "";
Array.from(buttons).forEach((button)=>{
    button.addEventListener((e)=>{
        if(e.target.innerHTML == '='){
            String = eval(String);
            display.innerHTML = String;
        }
        if(e.target.innerHTML == 'C'){
            String = "";
        }
        if(e.target.innerHTML == 'x'){
            String+="*";
        }
        String += e.target.innerHTML;
        console.log(String);
        display.innerHTML = String;
    })
})