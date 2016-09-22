/**
 * @Author: Created By McChen
 * @Date: 2016/7/11
 * @Mail: chenjiahao@jd.com
 * @Version: V1.0.0
 */

(function(){
    var fs = require('fs');
    var path = require('path');

    var mkdirs = {
        // 异步创建，无法保证先后执行回调的顺序
        async: function (dirname, callback) {
            fs.exists(dirname, function (exists){
                if(exists){
                    callback();
                }else{
                    mkdirs.async(path.dirname(dirname), function (){
                        fs.mkdir(dirname, callback);
                    });
                }
            });
        },
        // 同步创建，可保证顺序
        sync: function (dirname) {
            if(fs.existsSync(dirname)){
                return true;
            }else{
                if(mkdirs.sync(path.dirname(dirname))){
                    fs.mkdirSync(dirname);
                    return true;
                }
            }
        }
    };

    module.exports = mkdirs;
})();
