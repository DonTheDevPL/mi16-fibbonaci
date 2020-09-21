function znajdzFibb(){
    let numer = document.getElementById('numer').value; 
    let wynik = fibbonacci(numer);
    let wynikOutput = document.querySelector("#wynik");
    wynikOutput.innerHTML = wynik;
}
function fibbonacci(numer){
    let wynik;
    if(numer == 0) return 0;
    if(numer == 1) return 1;
    return (fibbonacci(numer-1)+fibbonacci(numer-2));
}