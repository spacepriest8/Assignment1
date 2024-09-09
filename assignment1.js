const calculate = (a,b,operation) => {
    if(a == null || b==null || typeof a !=='number' || typeof b !=='number'){
        return `Error:undefined or null `;
    }
if (operation==='add') {
    return a + b;
} else if (operation==='multiply'){
    return a * b;
} else if(operation==='subtract'){
    return a-b;
} else if(operation==='divide'){
    if(b !== 0){
        return a/b;
    } else{
        return `error: Division not allowed`;
     } 
} else {
    return`error: invalid operation`;
}
};
    
const result= calculate(3,5,"add")
console.log(result)

