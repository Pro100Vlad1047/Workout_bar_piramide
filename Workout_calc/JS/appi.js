let set =document.getElementById('set'),
    sets=document.getElementById('sets'),
    reps=document.getElementById('reps'),
    steps=document.getElementById('steps'),
    stepsInfo=document.getElementById('stepsInfo');


const totalReps=(e,step=1)=>{
  console.log(step);
  if(e%step!=0){return `'(step number incorrect)'`}
  if(e==step){
    return step;
  }else{
    return e+totalReps(e-step,step);
  }
}

const output=(e)=>{

  if(set.value!=''&& set.value<10000 && set.value>0){
    sets.innerHTML=`'${set.value}'`;
    reps.innerHTML=`'${totalReps(Number(set.value),Number(steps.value))}'`;
    stepsInfo.innerHTML=`'${steps.value}'`;
  }else{
    sets.innerHTML=`'(set the number)'`;
    reps.innerHTML=`'(set the number)'`;
    stepsInfo.innerHTML=`'(set the number)'`;
  }
}

set.addEventListener('input',output);
steps.addEventListener('input',output);
