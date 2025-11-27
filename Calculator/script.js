// Get the display screen element
let screen = document.getElementById('screen');

// Get all elements with the class 'btn'
let buttons = document.querySelectorAll('.btn');

// Loop through every button to add click functionality
buttons.forEach(function(button) {
    
    button.addEventListener('click', function(e) {
        
        // Get the value of the clicked button (e.g., "7", "+", "=")
        let value = e.target.innerText;
        
        // Log to console for debugging
        console.log("User clicked:", value);

        // CHECK: If user clicked "C", clear the screen
        if (value === 'C') {
            screen.value = "";
        }
        
        // CHECK: If user clicked "=", calculate the result
        else if (value === '=') {
            // Check if screen is not empty
            if (screen.value !== "") {
                try {
                    // Use eval to do the math
                    let result = eval(screen.value);
                    screen.value = result;
                } catch (error) {
                    screen.value = "Error";
                }
            }
        }
        
        // CHECK: If user clicked the back arrow, remove last character
        else if (value === '←') {
            // Take the current string and slice off the last character
            screen.value = screen.value.slice(0, -1);
        }
        
        // DEFAULT: Otherwise, just add the number/operator to the screen
        else {
            screen.value = screen.value + value;
        }
    });
});