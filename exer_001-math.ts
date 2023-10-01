/**
 * Soma de 2 números
 * @param a 
 * @param b 
 * @returns number
 */
export function sum(a: number, b: number): number {
  return a + b;
}

/**
 * Retorna o menor número dentro do array
 * @param numbers 
 * @returns number
 */
export function min(numbers: number[]): number {
  return Math.min(...numbers);
}

/**
 * Retorna o maior número dentro do array
 * @param numbers 
 * @returns number
 */
export function max(numbers: number[]): number {
  return Math.max(...numbers);
}

/**
 * Checa se o numero passado é par
 * @param n 
 * @returns boolean
 */
export function checkEvenNumber(n: number): boolean {
  return n % 2 === 0;
}

/**
 * Checa se o numero passado é primo
 * @param n 
 * @returns boolean
 */
export function checkPrimeNumber(n: number): boolean {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}