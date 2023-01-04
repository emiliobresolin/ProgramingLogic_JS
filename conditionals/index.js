const datetime = new Date().toLocaleTimeString();
const time = 12;
console.log(datetime);
if(time >= 0 && time <= 11)
{
    console.log('good morning');
}
else if(time >= 12 && time <= 17)
{
    console.log('good afternoon');
}
else if(time >= 18 && time <= 23)
{
    console.log('good evening');
}
else
{
    console.log('Hi');
}

