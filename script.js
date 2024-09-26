
let inputbox=document.querySelector('.INPUTBOX');

let buttons=document.querySelectorAll('button');

let expression="";

let arr=  Array.from(buttons);

 arr.forEach(buttons => {
    buttons.addEventListener('click',(e)=> {
        let values=e.target.innerHTML;

        if(values === "="){
            expression= eval (expression);
            inputbox.value=expression;

        }else if (values == "AC") { 
                expression = "";
                inputbox.value = expression;
            }else if (values == "DEL" ){
                expression=expression.substring( 0,expression.length-1)
                inputbox.value = expression;
            
            } 
            
            
            else {
            expression += values;
        inputbox.value=expression;
    }

    });


    
});

