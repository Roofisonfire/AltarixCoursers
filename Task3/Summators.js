function basesummator(){
s=0;
 for(i=0;i<arguments.length;i++){
   s+=arguments[i];
 }
  return s;
}

 console.log(basesummator(1,2,3,4,5))
 
function foreachsummator(){
arr=[];
 for(i=0;i<arguments.length;i++){
   arr[i]=arguments[i];
 }
  s=0;
 result=arr.forEach(function(item) {
 s+=item;
});
 return s;                                        
}

 console.log(foreachsummator(1,2,3,4,5)); 


function reducesummator(){
arr=[];
 for(i=0;i<arguments.length;i++){
   arr[i]=arguments[i];
 }
 result=arr.reduce(function(sum, current) {
 return sum + current;
});
 return result;                                        
}

 console.log(reducesummator(1,2,3,4,5));