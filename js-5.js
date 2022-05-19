

let card = prompt("Номер вашей карты");
number = card.replace(card.slice(0, -4),"**********");
console.log(number);