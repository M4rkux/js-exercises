/**
 * Retorna o array ordenado de forma decrescente
 * @param arr 
 * @returns number[]
 */
export function orderDesc(arr: number[]): number[] {
  return arr.sort((a: number, b: number) => b - a);
}

/**
 * Cria e retorna um array booleano 9x9 com todas as celulas inicializadas com false
 * @returns boolean[][]
 */
export function createBooleanArray9x9(): boolean[][] {
  const SIZE = 9;
  return new Array(SIZE).fill(null).map(() => new Array(SIZE).fill(false));
}

/**
 * Verifica se todas as celulas da matriz são verdadeiras
 * @param arr 
 * @returns boolean
 */
export function isAllCellsTrue(arr: boolean[][]): boolean {
  return arr.every(row => row.every(col => col));
}