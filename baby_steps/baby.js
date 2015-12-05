var sum = 0;

for (var i = 2; i < process.argv.length; i++) {
  var num = Number(process.argv[i]);
  sum = sum + num;
}

console.log(sum);


// Official Solution:
// var result = 0

//  for (var i = 2; i < process.argv.length; i++)
//    result += Number(process.argv[i])

// console.log(result)
