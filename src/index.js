
function createArray(size){
  let arr =[];
  for(let i = 0; i < size; i++){
    arr.push(i);
    
    if(i % 3 === 0){
      console.log('foo' +' '+ i );
    }
      if(i % 5 === 0){
        console.log('bar' +' '+ i );
    }
      if(i % 3 === 0 && i % 5 === 0){
        console.log(' FooBazz'  +' '+ i );
        }
  }
}
createArray(10);