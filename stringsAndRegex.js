let multilineString = `This is on
two lines`;
console.log(multilineString);

let rate = 0.9;
function calculateFee(amount){
    return amount * 0.1;
}
console.log(`The fee is ${calculateFee(rate)}`);

function isEmpty(str){
    return (!str || str.length === 0);
}

function isString(value){
    return typeof value === "string" || String.prototype.isPrototypeOf(value);
}

function isBlank(str){
    return str.trim().length === 0;
}

function areEqual(str1, str2){
    return str1 === str2;
}

function areEqualIgnoreCase(str1, str2){
    return str1.toUpperCase() === str2.toUpperCase();
}

function isEqualIgnoreDiacritic(str1, str2){
    return str1.localeCompare(str2, undefined, {sensitivity: 'case'}) === 0;
}

function sortNumberedStrings(numberedStringArray){
    let copy = numberedStringArray.slice();
    copy.sort((a,b) => a.localeCompare(b, undefined, {numeric: true}));
    return copy;
}

function collectList(str, startString, endString){
    const start = str.indexOf(startString) + 1;
    const end = str.indexOf(endString, start);
    const list = str.slice(start, end);
    return list.split(", ")
}

function truncate(str) {
    const maxLength = 40;
    if(str.length <= maxLength) {
        return str;
    }
    return str.slice(0, maxLength) + "...";
}

function isSecureUrl(str){
    return str.startsWith("https://")
}

function applyUsLocale(sum) {
    return new Intl.NumberFormat("en-us", {style: "currency", currency:"USD"}).format(sum);
}

const regexLiteral = /Script/gm;
const regexObject = new RegExp("Script", "g");

//Returns an array of all regex matches
function stringFromRegex(str){
    return str.match(regexLiteral);
}

console.log(replaceText("Scripting", ""))

function replaceText(str){
    return str.replace(regexLiteral, '');
}