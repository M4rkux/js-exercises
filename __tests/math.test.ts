import {describe, expect, test} from '@jest/globals';
import { checkEvenNumber, checkPrimeNumber, max, min, sum } from "../exer_001-math";

describe("Teste de funções aritimeticas", () => {
  test("Soma 2 números", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(3, -3)).toBe(0);
    expect(sum(69, 420)).toBe(489);
  });

  test("Acha o menor número", () => {
    const arr1: number[] = [5, 6, 3, 1, 2, 0, 8, 9, 10, 4, 7];
    expect(min(arr1)).toBe(0);

    const arr2: number[] = [5, 6, 3, 1, 2, 0, 8, 9, -10, 4, 7];
    expect(min(arr2)).toBe(-10);
  });

  test("Acha o maior número", () => {
    const arr1: number[] = [5, 6, 3, 1, 2, 0, 8, 9, 10, 4, 7];
    expect(max(arr1)).toBe(10);

    const arr2: number[] = [5, 6, 3, 1, 2, 0, 8, 9, -10, 4, 7];
    expect(max(arr2)).toBe(9);
  });

  test("Verifica se o numero passado é par", () => {
    expect(checkEvenNumber(1)).toBe(false);
    expect(checkEvenNumber(2)).toBe(true);
    expect(checkEvenNumber(3)).toBe(false);
    expect(checkEvenNumber(69)).toBe(false);
    expect(checkEvenNumber(420)).toBe(true);
  });

  test("Verifica se o número passado é primo", () => {
    expect(checkPrimeNumber(2)).toBe(true);
    expect(checkPrimeNumber(3)).toBe(true);
    expect(checkPrimeNumber(4)).toBe(false);
    expect(checkPrimeNumber(7)).toBe(true);
    expect(checkPrimeNumber(69)).toBe(false);
    expect(checkPrimeNumber(420)).toBe(false);
  });
});