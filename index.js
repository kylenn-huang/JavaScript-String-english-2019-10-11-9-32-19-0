// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
console.log('name', name.toUpperCase());

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
var reg = /(\s?)(\w+)/g
var res = sentence.replace(reg, function (match, space, letter) {
return space + letter[0].toUpperCase() + letter.substr(1);
});
console.log('res', res);

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
var moneyCount = money.substring(1)
console.log('money', moneyCount);
