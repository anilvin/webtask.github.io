

console.log(9)
function prime(){
    var num = document.getElementById('an').value;
  if(num<=0){
    console.log(`${num} is not prime`)
            } 
  else if (num == 1 ){
              console.log('num is neither prime nor composite')
                 } 
  else if(num ==2 ){console.log('number is prime')}               
  else if(num %2 ==0){console.log('number is never prime')}               
  else if (num>2){
     var count = 0;
        for(let i=2; i<=Math.sqrt(num); i++){
          count++;
          console.log(count);

          if(num%i==0){
            var res=('num is not prime')
            break;
                      }
        else{
        var res= (`${num} is a loop prime`);
            }
                                 }
           console.log(res)  ;                    
  } 
  else {
    console.log('invalid reddy number');
  }
}
