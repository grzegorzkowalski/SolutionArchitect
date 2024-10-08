//Zadanie 2
    const person = {
    name: "Vlad",
    lastName: "Drăculea",
    yearOfBirth: 1431,
    profession: "Lord of Wallachia"
};

const whoAreYou = ({name, lastName,yearOfBirth, profession}) => {
   return (`My name is ${name} ${lastName}.
I am ${new Date().getFullYear() - yearOfBirth} years old.
My profession is ${profession}.`)
}

console.log(whoAreYou(person));