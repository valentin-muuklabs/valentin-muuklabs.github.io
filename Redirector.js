function redirect(){
  let secret=Math.random();
  secret="secret="+secret;
  document.cookie = secret;
  window.location.replace("Target.html?"+secret);

}
redirect();