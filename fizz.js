var numeros = 100;
for(i = 1; i<=100; i++)
  {
    if(esDivisible(i,3))
    {
      document.write("Fizz");
    }
    if(esDivisible(i,5))
    {
      document.write("Buzz");
    }
    if (!esDivisible(i,3) && !esDivisible(i,5)) // con el ! se dice no es cierto ejecuto
    {
      document.write(i);
    }
    document.write("<br />");
}

function esDivisible(num, divisor)
{
 if (num % divisor == 0)
 {
   return true;
 }
 else
 {
   return false;
 }

}
