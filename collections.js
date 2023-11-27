function arrToSet(X){
    return new Set(X)
}
function setToArr(X){
    return Array.from(X);;
}
function arrToStr(X){
    return X.join('');
}
function setToStr(X){
    return Array.from(X).join('');
}
function strToArr(X){
    return Array.from(X);
}
function strToSet(X){
    return arrToSet(setToArr(X))
}
function mapToObj(X){
    return Object.fromEntries(X);
}
function objToArr(X){
    return Object.values(X); 
}
function objToMap(X){
    return new Map(Object.entries(X));
}
function arrToObj(X){
    return Object.assign({}, X);
}
function strToObj(X){
    return  arrToObj(strToArr(X));
}
function superTypeOf(X){
    
    if(X instanceof Set)
    {
        return "Set";
    }
    else{
        if(X instanceof Map)
        {
            return "Map";
        }
        else{
            if(Array.isArray(X)){return 'Array';}
            else{
                if(X===''){
                    return "String";}
            }
        }
        if(X===null)
        {
            return 'null';
        }
        if(X===undefined)
        {
            return 'undefined';
        }
        return !(typeof X) ? '':(typeof X) .charAt(0).toUpperCase() + (typeof X) .slice(1) ;
    }
}

