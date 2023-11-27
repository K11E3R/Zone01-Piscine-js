function words(a) {
    return a.split(' ')
}
function sentence(a){
    let result = a[0]
    for (let i=1;i<a.length;i++){
        result = result + ' '+ a[i]
    }
    return result
}
function yell(a){
    return a.toUpperCase();
}
function whisper(a){
    return '*'+a.toLowerCase()+'*'
}
function capitalize(a){
    return a.charAt(0).toUpperCase() + a.slice(1).toLowerCase()
}
