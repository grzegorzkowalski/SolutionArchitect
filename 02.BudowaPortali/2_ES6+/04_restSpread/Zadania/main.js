// Zadanie 1

const namesA = ["Zosia", "Marcin", "Kamil"];
const namesB = ["Ala", "Puszek", ...namesA, "Jan", "Karol"];
//console.log(namesB);

//Zadanie 2

const state = {
    invoiceSection: false,
    availableYears: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005],
    formStatus: "failed",
    isUserLogged: false
};

const stateCopy = {
    ...state,
    isUserLogged: !state.isUserLogged,
    availableYears: state.availableYears.filter(el => el < 2000)
}

console.log(stateCopy);


//Zadanie 2
// Stwórz funkcję o nazwie getAverage, która może przyjąć dowolną liczbę parametrów (w postaci liczb) i która zwraca średnią arytmetyczną tych liczb.
//
// Przykład wywołania:
//
// getAverage(2, 4, 5, 6, 7, 79);

const getAverage = (...params) => {
    return params.reduce((a,b) => a+b)/params.length
};
console.log(getAverage(2, 4, 5, 6, 7, 79));
console.log(getAverage(2,4,6));

// Zadanie 3
// Stwórz zmienną przechowującą Twoje imię. Za pomocą operatora rozproszenia zapisz każdą literkę do tablicy. Wypisz tablicę w konsoli.
//
const name = "Grzegorz";
const letters = [...name];
console.log(letters);

// Zadanie 4
// Stwórz dwie tablicę fruits i vegetables. Następnie stwórz trzecią tablicę mix, która będzie połączeniem obu poprzednich tablic. Użyj operator rozproszenia.

const vegetables = ["potato", "tomato"];
const fruits = ["cherry", "peach"];

const salad = [...vegetables, ...fruits];
console.log(salad);