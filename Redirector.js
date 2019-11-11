var count=5;
function redirect(){
  setInterval(countDown,1000);
}

function countDown(){
  document.getElementById("count").innerText=count;
  count = count-1;
  console.log("count "+count);
  if(count===0){
    let secret=Math.random();
    secret="secret="+secret;
    document.cookie = secret;
    document.location.href="Target.html?"+secret;
  }
}