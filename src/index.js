
function createArray(length){
  let arr =[];
  for(let i = 0; i < length; i++){
    arr.push(i);
    console.log(arr);
    
    if(i % 3 === 0){
      console.log('foo' +' '+ i );
    }else{
      if(i % 5 === 0){
        console.log('bar' +' '+ i );
    }else{
      if(i % 3 === 0 && i % 5 === 0){
        console.log(' FooBazz'  +' '+ i );
        }
    }
    }
      
      
  }
}
createArray(17);