/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

var babel = require('babel-core');
module.exports = function(content, file, options){
	var result = babel.transform(content, opts);
	return result.code;
}
