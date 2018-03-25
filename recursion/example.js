const wr = (msg = '--------') => console.log(`${msg}`);

// recursion is very readable, but not good for micro optimizations, so there
// are better solutions that are more performant
function basicRecursion(max, current) {
  // always start with a base case to avoid stack overflow
  if (current > max) {
    return;
  }
  wr(current);
  basicRecursion(max, current + 1);
}

basicRecursion(5, 1);
wr();
wr();

// fibonacci sequence are the two previous terms added together:
// 1 + 1 = 2, 2 + 1 = 3, 3 + 2 = 5, 5 + 3 = 8
function fibonacci(n) {
  // base case, should be pretty agressive incase someone calls fib w/ -1
  if (n <= 2) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 1; i <= 20; i++) {
  wr(`${i}. ${fibonacci(i)}`);
}
