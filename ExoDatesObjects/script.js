let date = new Date();
console.log(date)
console.log(date.getDay);
console.log(date.getTime() / 1000);
Math.floor(date.getTime() / 1000);

console.log(date.toLocaleString('en-US', { timeZone: "America/anchorage" }));
console.log(date.toLocaleString('en-GB', { timeZone: "Europe/Moscow" }));
console.log(date.toLocaleString('fr-fr', { timeZone: "Europe/Brussels" }));

let myBirthday = new Date("1999-03-23");
console.log(myBirthday);
let now = new Date().getTime();
let diff = now - myBirthday.getTime();
console.log(diff / 1000 / 60 / 60 / 24);

console.log(howManyTimePassed(myBirthday));

function howManyTimePassed(date) {
	let timeStamp = new Date("1970-01-01").getTime();
	return date.getTime() - timeStamp;
}




