/**
 * Created by Administrator on 2017/8/11.
 */
var fs = require('fs');

fs.readFile('input.txt',function(err,data){
    if(err){
        return console.error(err);
    }
    console.log(data.toString());
});
