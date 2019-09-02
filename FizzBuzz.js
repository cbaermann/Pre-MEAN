function FizzBuzz(num)
{
    while(i < num)
    {
        if(i % 3 && i % 5 == 0)
        {
            console.log("FizBuz");
        }
        if(i % 3 == 0 && i % 5!==0)
        {
            console.log("Fizz")
        }
        if(i % 5 == 0 && i % 3 !==0 )
        {
            console.log("Buzz");
        }
        else{
            console.log("num")

        }
    }

}

FizzBuzz(1,3,4,5)