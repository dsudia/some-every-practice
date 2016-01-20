var goodInput = ['Strange is the night where black stars rise,',
                     'And strange moons circle through the skies,',
                     'But stranger still is',
                     'Lost Carcosa.'];
var badInput = ['Along the shore the cloud waves break,',
                    'The twin suns sink behind the lake,',
                    'The shadows lengthen',
                    'In Carcosa.'];

function lostCarcosa (input) {
  return input.some(function(str) {
    return str.includes('Lost');
  });
}

console.log(lostCarcosa(goodInput));
console.log(lostCarcosa(badInput));