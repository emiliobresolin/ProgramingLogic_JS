const num = [1,2,3,4,5,6,7,8,9,10,11,12];
for (let number of num)
{
    if(number == 2)
    {
        console.log('skipped number 2');
        continue;
    }
    if (number === 7)
    {
        console.log('number 7 found!')
        break;
    }
    console.log(number);
}

