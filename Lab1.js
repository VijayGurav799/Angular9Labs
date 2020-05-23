var StringUtilityClass = /** @class */ (function () {
    function StringUtilityClass(stringObj) {
        this.stringObj = stringObj;
        this.counter = function (str) {
            var string1 = str.split("").sort().join("");
            var counter = 1;
            for (var i = 0; i < str.length; i++) {
                if (string1[i] == string1[i + 1]) {
                    counter++;
                }
                else {
                    console.log(" Frequency of a character in a string: " + (string1[i] + " " + counter));
                    counter = 1;
                }
            }
        };
        this.NumberOfStatements = function (s) {
            var stringList = [];
            var stringArray = [];
            stringList = s.split(" ");
            for (var _i = 0, stringList_1 = stringList; _i < stringList_1.length; _i++) {
                var text = stringList_1[_i];
                stringArray.push(text.charAt(0).toUpperCase() + text.substr(1));
            }
            return stringArray.length;
        };
        this.capitalize = function (s) {
            var stringList = [];
            var stringArray = [];
            stringList = s.split(" ");
            for (var _i = 0, stringList_2 = stringList; _i < stringList_2.length; _i++) {
                var text = stringList_2[_i];
                stringArray.push(text.charAt(0).toUpperCase() + text.substr(1));
            }
            return stringArray.join(" ");
        };
    }
    return StringUtilityClass;
}());
var exampleString;
exampleString = 'Typescript is a ES 6 based programming langugae. This is developed by Microsoft. This language is used for modern front-end programming. The Angular uses this language for its development. Typescript has data types, object oriented programming, etc. This language improves the productivity of JavaScript programming and gives power to it. The TypeScript is transpiled into JavaScript.';
var m1 = new StringUtilityClass(exampleString);
m1.counter(exampleString);
console.log("First Character of every word to uppercase: \n " + m1.capitalize(exampleString));
console.log("Number of words in string: \n " + m1.NumberOfStatements(exampleString));
