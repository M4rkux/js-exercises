import {describe, expect, test} from '@jest/globals';
import { createBooleanArray9x9, isAllCellsTrue, orderDesc } from '../exer_003-array';

describe("Exercício de arrays", () => {
  test("Ordena um array de forma decrescente", () => {
    expect(orderDesc([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
    expect(orderDesc([420, 2, 69, 4, 5])).toEqual([420, 69, 5, 4, 2]);
    expect(orderDesc([])).toEqual([]);
  });

  test("Testa a criação de um array 9x9 com todas as celulas falsas", () => {
    const arr = createBooleanArray9x9();
    expect(arr.every(row => row.every(col => !col))).toBe(true);
    arr[0][1] = true
    expect(arr.flat().filter(cell => cell).length).toBe(1);
  });

  test("Testa a validação de todas as celulas verdadeiras", () => {
    const arrTrue = new Array(9).fill(null).map(() => new Array(9).fill(true));
    const arrFalse = new Array(9).fill(null).map(() => new Array(9).fill(false));
    expect(isAllCellsTrue(arrTrue)).toBe(true);
    arrTrue[1][1] = false;
    expect(isAllCellsTrue(arrTrue)).toBe(false);
    expect(isAllCellsTrue(arrFalse)).toBe(false);
  });
});