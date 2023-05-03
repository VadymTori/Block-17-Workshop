const coffeeData = require("./Coffee Menu");
/* 
Check that arrows shows correctly at table map
 */
/* 
const nameAndPrice = (item) => {
    return [item.name, item.price, item.seasonal];
}
console.table(coffeeData.map(nameAndPrice));
 */
console.log("2. Print an array of all the drinks on the menu.")
const nameAndPrice = (item) => {
    return [item.name];
}
console.table(coffeeData.map(nameAndPrice));
console.log("=============DONE==============")

console.log("3. Print an array of drinks that cost 5 and under.") /* You want an array with just the names of drinks <=5, don't you?*/
const underFive = (item) => {
    return item.price <= 5;
}
const itemsUnderFive = coffeeData.filter(underFive).map(nameAndPrice); 
console.table(itemsUnderFive);
console.log("=============DONE==============")

console.log("4. Print an array of drinks that are priced at an even number.")
const EvenNumber = (item) => {
    return item.price %2 == 0; /* delete "== 0 to see only odd prices" */
}
const itemsEvenNumber = coffeeData.filter(EvenNumber).map(nameAndPrice); 
console.table(itemsEvenNumber);
console.log("=============DONE==============")

console.log("5. Print the total if you were to order one of every drink.")
/* This is an array of all prices */
const findPriceArray = (item) => {
    return item.price;
}
const priceArray = coffeeData.map(findPriceArray);
/* console.log(priceArray); */
/* console.log to see em */

/* Now we summ all the prices */
const sumTotalCost = (accumulator, currentValue) => {
    return accumulator + currentValue;
}
/* And show the result */
const totalPrice = priceArray.reduce(sumTotalCost);
console.log("THe total price is: "+totalPrice+"$")
/* console.log(totalPrice) */
console.log("=============DONE==============")

console.log("6. Print an array with all the drinks that are seasonal.")
const isSeasonal= (item) => {
    return item.seasonal == true;
}
const isSeasonalDrink = coffeeData.filter(isSeasonal);
console.table(isSeasonalDrink);
console.log("=============DONE==============")

console.log("7. Print all the seasonal drinks with the words \"with imported beans\" after the item name. For example: \"affogato with imported beans\".")
const namePLusBeans = (item) => {
    return [item.name]+" with imported beans";
}
const seasonalAndBeans = coffeeData.filter(isSeasonal).map(namePLusBeans);
console.table(seasonalAndBeans);
console.log("=============DONE==============")