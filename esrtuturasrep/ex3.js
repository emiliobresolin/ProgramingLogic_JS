function fizzBuzzTche(num)
{
    if(typeof num !== 'number') return num;
    if(num % 3 === 0 && num % 5 === 0) return 'TcheFizz&Buzz';
    if(num % 3 == 0) return 'TcheFizz';
    if(num % 5 == 0) return 'TcheBuzz';
    return num;
}
for (let i =0; i<=100;i++)
{
    console.log(i, fizzBuzzTche(i));
}