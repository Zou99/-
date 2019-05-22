;
function isLogin(state=1){
  var isUid = $api.getStorage('token');
  if(isUid==null){
    if(state == 1){
      api.openWin({
          name: 'login',
          url: './login.html',
          pageParam: {
              name: 'test'
          }
      });
      return true;
    }else{
      api.openWin({
          name: 'login',
          url: './html/login.html',
          pageParam: {
              name: 'test'
          }
      });
      return true;
    }
  }else{
    return false;
  }
}
