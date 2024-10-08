//Zadanie 1

function distFromAverage(tab) {
    const sum = tab.reduce((total, cur) => total+cur, 0);
    console.log(sum);
    const avg = sum/tab.length;
    console.log(avg);
    const result = tab.map(el => Math.abs(el - avg));
    console.log(result);
    return result;
}
const distFromAverage2 = (tab) => tab.map(el => Math.abs(el - tab.reduce((total, cur) => total+cur, 0)/tab.length));

console.log(distFromAverage2([1,2,3,4,5,6,7])) //=> [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)
console.log(distFromAverage2([1,1,1,1])) //=> [0,0,0,0] (średnia z tablicy wejściowej to 1)
console.log(distFromAverage2([2,8,3,7])) //=> [3,3,2,2] (średnia z tablicy wejściowej to 5)

//Zadanie 2
function multiply(array1){
    return array1.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}
const tablica = [1, 2, 3, 4, 5];
console.log(multiply(tablica));

//Zadanie 3

const getEvenAverage = (arr) => {
    const evenTab = arr.filter(el => el % 2 === 0);
    if (!evenTab.length) {
        return null;
    }
    return evenTab.reduce((prev, cur) => prev + cur)/evenTab.length;
}

console.log(getEvenAverage([1,2,3,4,5,6,7]), 4) //=> 4
console.log(getEvenAverage([1,1,1,1]), null) //=> null
console.log(getEvenAverage([2,8,3,7,4]), 4.666) // => 4.666