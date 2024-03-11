Practice with Functions (5 points)

    Write a function called halfNumber() that accepts one argument (a number), divide it by 2, and return the result. It should log a string like "Half of 5 is 2.5.".
    Write a function called squareNumber() that accepts one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
    Write a function called percentOf() that accepts two numbers, figure out what percent the first number represents of the second number, and return the result. It should log a string like "2 is 50% of 4."
    Write a function called findModulus() that accepts two numbers. Within the function write a statement that returns the modulus of the first and second parameters. It should log a string like "2 is the modulus of 4 and 10."

The Rock, Paper, Scissors Game (20 points)

Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:

    Rock destroys scissors.
    Scissors cut paper.
    Paper covers rock.

Our code will break the game into 3 phases:

    User makes a choice. How will we collect the user’s choice?
    Computer makes a choice. How will we collect the computer’s choice?
    A conditional that determines who wins.

You will be responsible for figuring out some of the logic. These next steps will attempt to guide you down the right path:

    Begin by prompting the user for their choice.
    Create the computer’s choice. This will be generated similarly to the coin flip that you did in the last assignment. Remember though, rather than 2 options, there will be 3 here.
    Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
    Create a conditional statement that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is.
    What if the result ends in a tie? Figure out how to handle that as well.
    What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.

The Basic Calculator (25 points)

In this part of the assignment you will build a simple calculator using the skills you’ve acquired in regards to functions. You will ask the user for a number, a second number, and then finally ask them what kind of operation they want to perform, either add, subtract, multiply, or divide. Depending on what they select, you will perform that operation. To complete this part of the assignment follow the steps outlined here:

    Create a function that will serve as the main calculation logic of your application. This function should be called calculate and will accept three parameters: x, y, and operation.
    In the script, prompt the user for a number and store that in a variable. Convert that to a number.
    Then, prompt the user for a second number and store that in a variable. Convert that to a number.
    Next, prompt the user for the operation they would like to perform (add, subtract, multiply, divide) and store that in a variable.
    Finally, pass the three parameters into the calculate function to return the result of the calculation. You'll need to add a switch statement inside the calculate function to evaluate the operation and perform the appropriate calculation on the x and y numbers based on the operation passed in.
    Display the result of the calculation within an alert.
    Figure out how to make it so that if the user doesn’t enter either add, subtract, multiply, or divide, they are displayed an alert message telling them that. Then you’ll have to rerun the application so that the application asks the user for the numbers and operation once more. You’ll have to add this functionality within a do while loop similarly how the labs were done in the previous lecture.
