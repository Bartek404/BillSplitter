const priceInput = document.querySelector('#price')
const peopleInput = document.querySelector('#people')
const tipInput = document.querySelector('#tip')
const btn = document.querySelector('.count')
const error = document.querySelector('.error')
const costInfo = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')

const mainFunction = () => {
	if (priceInput.value <= 0 || priceInput.value === '' || peopleInput.value <= 0 || peopleInput.value === '') {
		error.textContent = 'Podaj poprawna wartosc'
		costInfo.style.display = 'none'
	} else {
		calculateTip()
		error.textContent = ''
		priceInput.value = ''
		peopleInput.value = ''
		tipInput.value = 0
	}
}

const calculateTip = () => {
	const price = Number(priceInput.value)
	const tip = Number(tipInput.value)
	const people = Number(peopleInput.value)
	const result = (price + price * tip) / people
	cost.textContent = result.toFixed(2)
	costInfo.style.display = 'block'
}

btn.addEventListener('click', mainFunction)
