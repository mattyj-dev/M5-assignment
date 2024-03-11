// COLLECT FIRST NUMBER FROM USER
X = prompt(`Enter your FIRST number in the equation`);

// COLLECT SECOND NUMBER FROM USER
Y = prompt(`Enter your SECOND number in the equation`);

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
Z = prompt(`Enter the operation: +,-,*,/`, `+`);
while (Z !== "+" && Z !== "-" && Z !== "*" && Z !== "/") {
    Z = prompt(`INVALID! Enter ONLY from these operations: +,-,*,/`, `+`);
}

// ADD A FUNCTION CALLED CALCULATE
function calculate() {
return eval(X + Z + Y);
}

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
    console.log(calculate());
    alert(calculate());