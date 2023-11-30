function multiply (n, m){
   var a=Math.abs(n),c=Math.abs(n);
   if(n===0 || m===0)
   {
      return 0;
   }
   for(var i = 1; i < Math.abs(m); i++)
      c += a;
   if(n<0 || m<0){
      if(n<0 && m<0){
         return c;}
   return -c;
   }
   if(m<0){
   return -c;
   }
   return c;
}
function divide(d, dv) {
     var q = 0, n = false;
     if( (d < 0 && dv > 0) || (d > 0 && dv < 0) ){ n = true; }
     d = Math.abs(d);
     dv = Math.abs(dv);
     if(d < dv) {return 0;}
     else if(d > 0 && dv != 0){
          while(d >= dv){
               d -= dv;
               ++q;
          }
     }
     return n ? -q : q;
}

function modulo(N, M) {
  var elem = N < 0 ? -1 : 1;
  var di = Math.abs(N);
  var d = Math.abs(M);
  if (di === 0) {return 0;}
  if (di === 0 || isNaN(di) || isNaN(d)) {return NaN;}
  if (di < d) {return multiply(elem,di);}var elem_h1 = di;while (elem_h1 >= d) {elem_h1 = elem_h1 - d;}
  return multiply(elem,elem_h1);
}