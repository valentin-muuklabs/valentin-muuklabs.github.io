function validateSecret(){
  
  let secret=document.cookie.toString().split(";").find(element=>element.indexOf("secret=")!=-1);
  
  let param= window.location.href.split("?")[1];
  param = param? param.toString : undefined;
  if(param && secret.toString().trim() == window.location.href.split("?")[1].toString().trim()){
    // document.getElementById("secret").innerText=document.cookie;
  }
  else{
    document.location.href="Error.html";
  }
}

validateSecret();