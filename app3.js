/**
 * Created by Administrator on 2017/8/11.
 */
var fs = require('fs');
var buf = fs.readFileSync('test.txt');
console.log(buf.toString().split('\n').length + '行')