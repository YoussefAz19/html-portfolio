    const display=document.getElementById("display");

    function DisplayFunc(input){
        display.value += input;

    }

    function clears(){
        display.value ="";

    }

    function calc(){
        try{
            display.value=eval(display.value);
        }
        catch(error){
            display.value="False";
        }
        
    }