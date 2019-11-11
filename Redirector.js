function redirect(){
  let secret=Math.random();
  secret="secret="+secret;
  document.cookie = secret;
  document.location.href="Target.html?"+secret;

}
redirect();