function fibonacci(numero) {
    if (numero < 0) {
        throw new RangeError("solo números enteros \u2265 0");
    }
    if (numero === 0) {
        return 0;
    }
    if (numero === 1) {
        return 1;
    }
    return fibonacci(numero - 1) + fibonacci(numero - 2);
}