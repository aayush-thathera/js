let num=[1,2,3,5,4,9,8];
let largest=0;
for (let i=0; i<num.length;i++){
    if(largest < num[i]){
        largest=num[i];
        
    }
}
console.log(largest);