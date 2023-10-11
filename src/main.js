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


const textarea = document.querySelector('.textarea--js');
const loadButton = document.querySelector('.load--js');
const saveButton = document.querySelector('.save--js');
const checkButton = document.querySelector('.check--js');

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
})

saveButton.addEventListener('click', () => {
  localStorage.setItem('content', textarea.value)
})

loadButton.addEventListener('click', () => {
  textarea.value = localStorage.getItem('content')
})
