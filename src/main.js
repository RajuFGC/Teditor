console.log('sum')
const numbers = [123,44,2,12,34,544,66,1,1,23,-34]
const sum = (numbers) => {
  let total = 0;
  for (let partNumber of numbers) {
  total = total + partNumber;
  }
return total;
}
console.log(sum(numbers));

import JSConfetti from 'js-confetti'
const jsConfetti = new JSConfetti()

const textarea = document.querySelector('.textarea--js');
const loadButton = document.querySelector('.load--js');
const saveButton = document.querySelector('.save--js');
const checkButton = document.querySelector('.check--js');
const refreshButton = document.querySelector('.refresh--js');

refreshButton.addEventListener("click", () => {
  // Call location.reload() to refresh the page
  location.reload();
});

let color = 'green'

checkButton.addEventListener('click', () => {
const textLength = textarea.value.length;
textarea.classList.remove(`text-${color}-500`)
if (textLength <= 10) {
  color = 'red'
} else if (textLength > 10 && textLength <= 20) {
  color = 'blue'
} else {
  color = 'green'
}
textarea.classList.add(`text-${color}-500`)
});

saveButton.addEventListener('click', () => {
  localStorage.setItem('content', textarea.value)
})

loadButton.addEventListener('click', () => {
  textarea.value = localStorage.getItem('content')
  jsConfetti.addConfetti({
    emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
 })
})








console.log('destrukturyzacja + spread');

const person = {
  name: 'Vash',
  age: 150,
  isAlive: true
}

const {name, age} = person

person.name = 'Joe'
console.log(name);
console.log(person.name);


const fruits = ['apple','orange','strawberry'];
const [firstFruit,,thirdFruit] = fruits;
console.log(firstFruit);
const vegetables = ['carrot','beetroot','tomato'];


const address = {
  city: 'NY',
  country: 'USA'
} 

const personWithAddress = {/*Spread method which is used here starts with '...' and adds elemnts from one object to the other*/
...person, 
...address,
}
console.log(personWithAddress)


const fruitsandveges = ['pizza',...fruits, ...vegetables];/*used with arrays too. Additionally we can also throw in a single string and it will be normally added*/
console.log(fruitsandveges);

const newFruits = [...fruits];
console.log(newFruits);
console.log(fruits);
 newFruits.push('banana');
console.log(newFruits);

const newPerson = {...person};

console.log(newPerson);
console.log(person);
newPerson.age = 40;
console.log(newPerson);
console.log(person);

console.log('czas goni nas')

console.log('czas dalej goni')

const myInterval = setInterval(() => {
  console.log('tik-tak')
}, 1000)

setTimeout(() => {
  clearInterval(myInterval)
  }, 5000)



  const myPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random()>0.5)
      resolve({name:'Joe'})
      else 
      reject('buuuu')
    }, 1000)
  });
 console.log(myPromise)
  myPromise().then((value) => {
    console.log(value)
  }).catch((reason) => {
    console.log(reason)
  }).finally(() => {
    console.log('koniec')
  })

  const test = async () => {
    try {
    const myObject = await myPromise()
    console.log(myObject);
    } catch(e) {
      console.log(e)
    }
  }
test()