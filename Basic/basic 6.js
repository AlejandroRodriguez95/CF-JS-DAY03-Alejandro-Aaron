var array = [5,2,1,3,4,6,8,6];
function product(array)
{
    product = array[0];
    for(var i=1;i<array.length;i++)
    {
        product*=array[i];
    }
    console.log(product);
    return product;
}

product(array);