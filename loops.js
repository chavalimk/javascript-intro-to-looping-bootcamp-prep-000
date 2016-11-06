function forLoop(array){
  for(var i=0; i<25; i++){
  array.push(`I am ${i} strange loops.`)
  }
  return array;
}

var whileLoop = (n)=>{
  while (n > 0) {
  console.log(--n)
  }
return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(A){
//A.pop();
do{
  A.pop();
} while (A.length>0||(maybeTrue()==false))
return A;
}
