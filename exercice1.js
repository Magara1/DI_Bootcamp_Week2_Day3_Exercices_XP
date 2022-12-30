
//Partie I

const people = ["Greg", "Mary", "Devon", "James"];

//1 Write code to remove “Greg” from the people array.
for(index=0;index<people.length;index++){
    if(people[index]=="Greg"){
       people.splice(index,1)

       break
    }
}
 console.log(people)

//2 Write code to replace “James” to “Jason”.

for(index=0;index<people.length;index++){
    if(people[index]=="James"){
       people[index] ="jason"
       break
    }
}
console.log(people)

//3.Write code to add your name to the end of the people array.

  // people.push("magara") 

//console.log(people)

//4.Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

console.log(people.indexOf('Mary'))

//5. 

let peopleCopy=people.slice(1,3)

console.log(peopleCopy)

//6. Écrivez le code qui donne l'index de "Foo". Pourquoi renvoie-t-il -1 ?

console.log( people.indexOf('Food')); 

//le resultat est -1 car l'element indexer ne se trouve pas dans le tableau.

//7 . Créez une variable appelée last dont la valeur est le dernier élément du tableau.

let last = people[people.length-1]

console.log(last);

//Partie II

//1-Using a loop, iterate through the people array and console.log each person.

for(let i=0;i<people.length;i++){
    console.log(people[i])
}

//2.Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .

for (let i=0;i<people.length;i++){
   // console.log(people[i])
    if(people[i]=="jason"){
        break
    }
}


