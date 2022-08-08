let date = new Date()
console.log(date)
console.log(date.getDay);
Math.floor(date.getTime() / 1000);

console.log(date.toLocaleString('en-US', { timeZone: "America/anchorage" }));
console.log(date.toLocaleString('en-GB', { timeZone: "Europe/Moscow" }));
console.log(date.toLocaleString('fr-fr', { timeZone: "Europe/Brussels" }));

