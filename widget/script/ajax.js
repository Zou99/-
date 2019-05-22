function ajaxGet(url) {
    return new Promise(function(resolve, reject) {
      api.ajax({
          url: 'http://192.168.2.24/api' + url,
          method: 'get'
      },function(ret, err){
          if (ret) {
              resolve(ret);
          } else {
              reject(err)
          }
      });
    });
  }
  // let token = api.getStorage('token');
  function ajaxPost(url, param) {
    return new Promise(function(resolve, reject) {
      api.ajax({
          url: 'http://sn.huyp.xin/api' + url,
          method: 'post',
          data: {
            values: param
          }
      },function(ret, err){
          if (ret) {
              resolve(ret);
          } else {
              reject(err)
          }
      });

    });
  }
