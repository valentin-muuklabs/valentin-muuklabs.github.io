function redirect(){
  let secret=Math.random();
  secret="secret="+secret;
  document.cookie = secret;
  window.location.assign("https://valentin-muuklabs.github.io/Target.html?"+secret);

}
redirect();