function sign(a){
    if (a===0){
        return 0
    }else{
        if (a>0){
            return 1
        }else{
            return -1
        }
    }
}
function sameSign(a,b){
    if (sign(a)===sign(b)){
        return true
    }else {
        return false
    }
}