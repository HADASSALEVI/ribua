

import Num from "./Num";
let newNum = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

function App() {
  return (
    <div className="arr">
    {newNum.map((el,i)=>
    <Num key = {i} number={el}
    color={
    numColor(el,i++)
    }/>
    
    )}
    

    </div>
  );
}
function numColor(number,i){
  if(!number % i == 1){
    return "yellow"
  }
 else if(number%2==0){
return "red"
  }

  else if (number%2==1)
  return "green"
}
export default App;

