let set =document.getElementById('set'),
    sets=document.getElementById('sets'),
    reps=document.getElementById('reps');


const totalReps=(e)=>{
  if(e==1){
    return 1;
  }else{
    return e+totalReps(e-1);
  }
}


set.addEventListener('input',(e)=>{
  console.log(e.target.value);
  if(e.target.value!=''&& e.target.value<9999&& e.target.value>0){
    sets.innerHTML=`'${e.target.value}'`;
    reps.innerHTML=`'${totalReps(Number(e.target.value))}'`;
  }else{
    sets.innerHTML=`'(set the number)'`;
    reps.innerHTML=`'(set the number)'`;
  }

})