def fib(n):
    if n == 0 or n == 1:
        return 1
    else:
        return fib(n - 1) + fib(n - 2)


for i in range(10):
    print(f'fib({i})={fib(i)}')
