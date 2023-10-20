// mail은 매개변수 
function emailCheck(mail) {
  // 찾는 문자열이 없으면 -1
  // false 반환해라.
  if(mail.indexOf("@") === -1 ){
    return false;
  }
  if(mail.indexOf(".") === -1){
    return false;
  } 
  return true;
} ;

email.indexOf("@");
email.indexOf(".");