// It calls indefinitely. At somePoint it returns a "range Error" due to reaches its maximum call stack size.

function recursionCalls(n){
    console.log(n);
    recursionCalls(n+1)
}

try{
    recursionCalls(1);
}catch(error){
    console.log('RangeError: ', error);
    
}
