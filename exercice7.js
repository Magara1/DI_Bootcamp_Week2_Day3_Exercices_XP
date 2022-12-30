/*Exercise 7 : Secret Group
Instructions */

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];




//1.A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
//Hint: a string is an array of letters

let nomsecret =""
for(let i=0;i<names.length;i++){
    nomsecret +=  names[i].charAt(0)
}

let nomsecretTab =nomsecret.split("").sort()

let newnomsecret=""

for(let i=0;i<nomsecretTab.length;i++){
    newnomsecret +=  nomsecretTab[i]
}

//2. Console.log the name of their secret society. The output should be “ABJKPS” 

console.log(  newnomsecret)



