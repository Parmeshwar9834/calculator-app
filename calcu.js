
    let input = document.getElementById("inputbox");
    

    function fun1() {
        
        let value = event.target.innerText; 

        if (value === "AC") {
            input.value = ""; 
        } 
        else if (value === "Del") {
            input.value = input.value.slice(0, -1); 
        } 
        else if (value === "=") {
            try {
                input.value = eval(input.value); 
            } catch {
                input.value = "Error"; 
            }
        } 
        else {
            input.value += value; 
        }
    }


