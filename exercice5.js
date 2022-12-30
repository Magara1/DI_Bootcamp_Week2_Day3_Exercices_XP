/*Exercise 5 : Family
Instructions
Create an object called family with a few key value pairs.
Using a for in loop, console.log the keys of the object.
Using a for in loop, console.log the values of the object.*/

let family = {
    nom:"kouao",
    age:"28",
    ville:"Abidjan",
    children:"2"
}

for (const property in family) {
    console.log(`${property}: ${family[property]}`);
  }

