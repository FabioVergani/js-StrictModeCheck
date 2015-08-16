/*
check if strict mode is enforced
doesn't use exceptions and works in any context, not only global one

var log=console.log.bind(console);
*/

log((eval("var __temp = null"),typeof __temp === 'undefined')?'strict':'non-strict');
