function idCheck(id){
  for(var i=0;i<id.length;i++){
    // charCodeAt : 문자열 중 하나를 선택하여 아스키코드 번호로 변환해주는 함수
    if(!(id.charCodeAt(i) > 64 && id.charCodeAt(i)  < 91) &&
    // upper대문자 alpha( A - Z )
      !(id.charCodeAt(i) > 96 && id.charCodeAt(i) < 123)) { 
        // lower소문자 alpha ( a - z )  
        return false;
      } 
    }
    return true;
  }
  // let a = "bang"
  // console.log(a.charCodeAt(1));
  // console.log("bang");
     console.log (idCheck("BANG"));

     module.exports = idCheck;

// TODO:id,pw,email 조건식 작성 (console.log찍어서 확인해보기)
// TODO:function 모듈 내보내기
// TODO:function 모듈 가져오기
// TODO:원하는 값을 변수 자리 대입
// TODO:true면 두번째 페이지로 넘어가기



