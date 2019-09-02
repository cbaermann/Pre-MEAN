function MMA(val)
{
    max = 0;
    min = 0;
    sum = 0;
    for(var i; i < arr.length-1;i++)
    {
        if(max < arr[i])
        {
            arr[i]=max;
        }
        if(min> arr[i])
        {
            min=arr[i]
        }
        sum = sum + arr[i];

        var avg = sum/arr.length-1;
        console.log("The minimum is", min);
        console.log("The maximum is",max);
        console.log("The average is", sum);
    }
}
return MMA([1,4,2,-4,8,9]);