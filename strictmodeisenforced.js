/*
check if strict mode is enforced
doesn't use exceptions and works in any context, not only global one

var log=console.log.bind(console);
*/
eval('var __temp=null;');
log(typeof __temp === 'undefined'?'strict':'non-strict');


/*
function test(){
  'use strict';
  eval('var __temp=null;');
  log(typeof __temp === 'undefined'?'strict':'non-strict');
}
*/

