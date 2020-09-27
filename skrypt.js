document.getElementById('przycisk').addEventListener('click', znajdzFibb);

function znajdzFibb() {
	let numer = document.getElementById('numer').value;
	if (numer < 0) {
		let wynik = 'Błąd! Ciąg fibbonaciego występuje od 0';
		let wynikOutput = document.querySelector('#wynik');
		wynikOutput.innerHTML = wynik;
	}
	else {
		let wynik = fibbonacci(numer);
		let wynikOutput = document.querySelector('#wynik');
		wynikOutput.innerHTML = wynik;
	}
}
function fibbonacci(numer) {
	if (numer == 0) return 0;
	if (numer == 1) return 1;
	return fibbonacci(numer - 1) + fibbonacci(numer - 2);
}
