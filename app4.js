/**
 * Created by Administrator on 2017/8/11.
 */
var fs = require('fs');
fs.readFile('test.txt',function (err,date) {
    if (err){
        console.log(err.stack);
        return;
    }
    console.log(date.toString() + '\n');
    console.log(date.toString().split('\n').length + '行');
})