//Zadanie 1

const [snow, ,sun] = ["snow", "rain", "sun"];
console.log(snow, sun);

//Zadanie 2

const slider = {
    type: "infinite",
    numberOfItems: 10,
    center: true,
    autoStart: true
}

const {type, autoStart} = slider;
console.log(type, autoStart);

//Zadanie 5
// Stwórz funkcję showAnimal(), która przyjmie obiekt:
//

// I wyświetli w konsoli: Kot ${name} ma ${catAge} lat i robi ${getVoice()}.
//
// Warunki
// Zmienna catAge powinna zawierać wartość z pola age
// Przypisanie wartości kluczy obiektu do zmiennych powinno nastąpić już w procesie deklaracji funkcji (nie w jej ciele)


const cat = {
    name: "Mruczek",
    age: 10,
    getVoice: () => "miau miau"
};

const showAnimal = ({name, getVoice, age: catAge}) => {
    return `Kot ${name} ma ${catAge} lat i robi ${getVoice()}`
}

console.log(showAnimal(cat));