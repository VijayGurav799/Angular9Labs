class StringUtilityClass {   
    constructor(
        private stringObj: string
    ) { }

    counter = (str) => {
        let string1 = str.split("").sort().join("");
        let counter = 1;
        for (let i = 0; i < str.length; i++) {
            if (string1[i] == string1[i + 1]) {
                counter++;
            } else {
                console.log(` Frequency of a character in a string: ${string1[i] + " " + counter}`);
                counter = 1;
            }
        }
    };

    NumberOfStatements = (s) => {
        let stringList = [];
        let stringArray = [];
        stringList = s.split(" ");
        for (let text of stringList) {
            stringArray.push(text.charAt(0).toUpperCase() + text.substr(1));
        }
        return stringArray.length;
    }


    capitalize = (s) => {
        let stringList = [];
        let stringArray = [];
        stringList = s.split(" ");
        for (let text of stringList) {
            stringArray.push(text.charAt(0).toUpperCase() + text.substr(1));
        }
        return stringArray.join(" ");
    }

}

let exampleString: string;
exampleString = 'Typescript is a ES 6 based programming langugae. This is developed by Microsoft. This language is used for modern front-end programming. The Angular uses this language for its development. Typescript has data types, object oriented programming, etc. This language improves the productivity of JavaScript programming and gives power to it. The TypeScript is transpiled into JavaScript.'
let m1 = new StringUtilityClass(exampleString);
m1.counter(exampleString);

console.log(`First Character of every word to uppercase: 
 ${m1.capitalize(exampleString)}`);

console.log(`Number of words in string: 
 ${m1.NumberOfStatements(exampleString)}`);

