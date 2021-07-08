// Add your functions here
function map(sourceArray, callbackFn) {
    let newArray = [];

    for (const e of sourceArray) {
     newArray.push( 
         callbackFn(e)
         ) 
 }
 return newArray
};
function reduce(sourceArray, callbackFn, startingPoint=0) {
    let runningTotal = startingPoint;

    for (const e of sourceArray) {
       
        runningTotal = callbackFn( e, runningTotal=true) 
    };
       
    return runningTotal
};