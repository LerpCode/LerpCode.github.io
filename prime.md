## Prime Numbers

Prime numbers are natural numbers greater than 1 that are only divisible by 1 and themselves. They are fundamental to number theory and have various applications in cryptography and computer science.

### Basic Prime Number Checking

The simplest way to check if a number is prime is by trial division:

```cpp
bool isPrime(int n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;
    
    for (int i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0)
            return false;
    }
    return true;
}
```

### Sieve of Eratosthenes

The Sieve of Eratosthenes is an efficient algorithm for finding all prime numbers up to a given limit n. Time complexity: O(n log log n)

```cpp
vector<bool> sieveOfEratosthenes(int n) {
    vector<bool> isPrime(n + 1, true);
    isPrime[0] = isPrime[1] = false;
    
    for (int i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (int j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    return isPrime;
}
```

### Segmented Sieve

Segmented Sieve is useful when dealing with large ranges. It uses less memory than the regular Sieve:

```cpp
vector<int> segmentedSieve(long long L, long long R) {
    // Generate primes up to sqrt(R)
    long long lim = sqrt(R);
    vector<bool> mark(lim + 1, false);
    vector<long long> primes;
    for (long long i = 2; i <= lim; ++i) {
        if (!mark[i]) {
            primes.push_back(i);
            for (long long j = i * i; j <= lim; j += i)
                mark[j] = true;
        }
    }
    
    vector<bool> isPrime(R - L + 1, true);
    for (long long i : primes) {
        for (long long j = max(i * i, (L + i - 1) / i * i); j <= R; j += i) {
            isPrime[j - L] = false;
        }
    }
    if (L == 1)
        isPrime[0] = false;
    
    vector<int> result;
    for (long long i = L; i <= R; ++i) {
        if (isPrime[i - L])
            result.push_back(i);
    }
    return result;
}
```

### Applications

1. **Cryptography**: Prime numbers are essential in RSA encryption
2. **Hash Tables**: Prime numbers are often used as hash table sizes
3. **Pseudo-random Number Generation**: Some PRNGs use prime numbers
4. **Error Detection and Correction**: Prime factorization in error detection codes

### Time Complexities

1. Basic Prime Check: O(√n)
2. Sieve of Eratosthenes: O(n log log n)
3. Segmented Sieve: O((R-L+1) log log R + √R log log √R)

### Tips for Competitive Programming

1. Precompute primes up to 10^6 using sieve if multiple queries are expected
2. Use segmented sieve for large ranges
3. For single prime checks, use the optimized isPrime() function
4. Consider using bitset for memory optimization in sieve

### Memory Optimization

When dealing with large numbers, consider using bitset instead of boolean array:

```cpp
bitset<10000001> isPrime;
void sieve() {
    isPrime.set(); // Set all bits to 1
    isPrime[0] = isPrime[1] = 0;
    for (int i = 2; i * i <= 10000000; i++) {
        if (isPrime[i]) {
            for (int j = i * i; j <= 10000000; j += i)
                isPrime[j] = 0;
        }
    }
}
``