module.exports = function zeros(expression) {
  var resault = '1';
  expression1 = expression.split('*');

  for (var i = 0; i < expression1.length; i++) {
    var res = factorial(expression1[i]);
    resault = multiply(resault, res.toString());
  }

  function factorial(str) {
    k = str.split("!").length - 1;
    n = parseInt(str);
    //console.log('str = '+ str +'; k = '+ k +'; n = '+ n +';');
    for (var i = n, r = '1'; i > 0; i = i - k) {
        r = multiply(r, i.toString());
    }
    return r;
  }

  function multiply(first, second) {

    first = first.split('').reverse();
    second = second.split('').reverse();
    var result = [];

    for (var i = 0; first[i] >= 0; i++) {
        for (var j = 0; second[j] >= 0; j++) {
            if (!result[i + j]) {
                result[i + j] = 0;
            }

            result[i + j] += first[i] * second[j];
        }
    }

    for (var i = 0; result[i] >= 0; i++) {
        if (result[i] >= 10) {
            if (!result[i + 1]) {
                result[i + 1] = 0;
            }

            result[i + 1] += parseInt(result[i] / 10);
            result[i] %= 10;
        }
    }

    return result.reverse().join('');
  }

  function checkNotZero(age) {
      return age > 0;
  }

  return resault.split("").reverse().findIndex(checkNotZero);
}
