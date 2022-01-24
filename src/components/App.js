import {Num} from "./Num";
let newNum = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]


function isPrime(number) {
  if(number===0||number===1){return false}
  for(var i = 2; i < number; i++)
    if(number % i === 0) {return false}
    return true
}
function App() {
  return (
    <div className="arr">
    {newNum.map((el,i)=>
      <Num key = {i} number={el} 
      color={isPrime(el)?"yellow":el%2===0?"red":"green"}
      />
    )}
    </div>
  );
}


 
export default App;