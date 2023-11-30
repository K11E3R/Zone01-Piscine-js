function indexOf(a,b,c){
    if (!c){
        c=0
    }
    if ( c<0 ){
        for (var i=a.length+c;i>=0;i--){
            if (a[i]===b){
                return i
            }
        }
    }else{
        if (c >= a.length){
            return -1;
        }else{
    for (var i=c;i<a.length;i++){
        if (a[i]===b){
            return i
        }
    }}}
    return -1
}
function lastIndexOf(a,b,c){
    let v =-1;
    if (!c){
        c=a.length-1
    }
    if ( c<0 ){
        if (a.length+c<0){
            return-1
        }else{
            for (var i=a.length+c;i<a.length;i++){
                if (a[i]===b){
                    return i
                }
            }
        }
}else{
    if (c<a.length){
        for (var i=c;i>=0;i--){
            if (a[i]===b){
                return i
            }
        }
    }
    for (var i=a.length-1;i>=0;i--){
        if (a[i]===b){
            return i
        }
    }
}
return -1
}
function includes(a,b){
    for (var i=0;i<a.length;i++){
        if (a[i]===b){
            return true
        }
    }
    return false
}