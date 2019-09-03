function getGoldbachsConjecture(n) {

  if (n < 2 || n % 2 !== 0) {
    return;
  }

  var primes = getFirstPrimes(n);

  for (var i = 0; i < primes.length; i++) {

    for (var j = 0; j < primes.length; j++) {

      var primesSum = primes[i] + primes[j];

      if (primesSum === n) {
        return [primes[i], primes[j]];
      } else if (primesSum > n) {
        break;
      }
    }
  }
}

function getFirstPrimes(n) {

  var primes = [];

  for (var j = 1; j < n; j++) {

    if (isPrime(j)) {
      primes.push(j);
    }
  }

  return primes;
}

function isPrime(n) {

  if (n < 2) {
    return false;
  }

  for (var potentialDivisor = 2; potentialDivisor < n; potentialDivisor++) {

    if (n % potentialDivisor === 0) {
      return false;
    }
  }

  return true;
}

module.exports = {
  getGoldbachsConjecture: getGoldbachsConjecture
};
