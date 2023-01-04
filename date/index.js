const date = new Date();

function leftZero(num)
{
    return num >= 10 ? num : `0${num}`;
}

console.log(leftZero(date.getDate()));
console.log(leftZero(date.getMonth()));
console.log(leftZero(date.getFullYear()));
console.log(leftZero(date.getHours()));
console.log(leftZero(date.getMinutes()));


console.log(date.toDateString());

const h3 = 60*60*3*1000; //ms milesimos de segundos
const date_ = new Date(0 + h3);

console.log(date_);



