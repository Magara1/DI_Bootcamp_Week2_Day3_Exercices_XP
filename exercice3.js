//Exercise 3 : Repeat The Question

//1. Prompt the user for a number.
//Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

//2. While the number is smaller than 10 continue asking the user for a new number.
//Tip : Which while loop is more relevant for this situation?

let num;

do {
    num = prompt("enter a number please")

} while (isNaN(num) || parseFloat(num) < 10 || parseInt(num) < 10);