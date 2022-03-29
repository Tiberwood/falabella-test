function isPrime(number) {
  var i = 2;
  while (i < number) {
    if (number % i == 0) {
      return false;
    }
    i++;
  }
  return true;
}

function primeNumbers(req, res) {
  if (!req.body.number) {
    res.status(400).json({ message: 'Missing number' });
    return;
  }
  let number = parseInt(req.body.number, 10);
  if (isNaN(number)) {
    res.status(400).json({ message: 'Number must be a number' });
    return;
  }
  let primeNumbers = [];
  let i = 2;
  while (i < number) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
    i++;
  }
  res.status(200).json({ data: primeNumbers.reverse() });
}

module.exports = {
  primeNumbers,
};
