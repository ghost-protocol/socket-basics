var moment = require('moment');
var now = moment();


//console.log(now.format());
//console.log(now.format('X'));
//console.log(now.format('x'));

var timestamp = 1444247486704;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('h:mm a'));
//console.log(timestampMoment.local().format('h:mm a'));
//console.log(timestampMoment.format('h:mm a'));

// console.log(now.format('MMM Do YYYY, h:mma'));
// console.log(now.subtract(1, 'year').calendar());
//console.log(now.format('h:mm a')); //6:45 pm
//now.subtract(10, 'days').calendar(); // 10/28/2016
//console.log(now.format('LTS')); //6:45 pm

