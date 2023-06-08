/**Write a JS program to display the n terms of odd natural numbers and their sum.
  Test Data Input number of terms : 10 

The odd numbers are :1 3 5 7 9 11 13 15 17 19 
The Sum of odd Natural Number upto 10 terms : 100**/
var sum=0
let x=(num)=>{
for(let i=0;i<=num;i++)
{
if(i%2==1)
{
sum=sum+i;
console.log(sum)
}
}
}
x(19) 
