/****************** */

const details = {
    my: 'name ',
    is: 'Rudolf ',
    the: 'raindeer'
  }

  let TexteChaine = ""

  //1. Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
  for (const property in details) {
  TexteChaine += `${property} ${details[property]}`;
  }

  console.log(TexteChaine)
  