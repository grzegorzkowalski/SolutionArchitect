//Zadanie 1

const arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];

const getSecondMaxNumber = (arr) => arr.length > 1 ? [...arr].sort((a,b) => b-a)[1] : null;

console.log(getSecondMaxNumber(arr1));

//Zadanie 2

const runInterval = (n = 8) => {
    let counter = 0;
    const intervalId = setInterval(() => {
        if(counter < n) {
          console.log("Hello");
          counter++;
        }
        else {
          clearInterval(intervalId)
        }

    }, 1000);
};

//runInterval(3);
runInterval();