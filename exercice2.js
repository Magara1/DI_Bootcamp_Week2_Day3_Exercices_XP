// Exercise 2 : Your Favorite Colors

//1. Create an array called colors where the value is a list of your five favorite colors.

let colors =["blue","green","orange","yellow","white"];

//2.Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .

for (let i=0;i<colors.length;i++){
    console.log("My #" +i+ " choice is " +colors[i]);
}

//3. Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.

let suffixe=["1st","2nd","3trd","4th","5th"]

for (let i=0;i<colors.length;i++){
    console.log("My " +suffixe[i] + " choice is " +colors[i]);
}

