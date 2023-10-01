import {describe, expect, test} from '@jest/globals';
import { concatString, convertLink, normalizeString, removeExtraSpaces, reverseString } from '../exer_002-string';

describe("Teste de funções com strings", () => {
  test("Testa a conversão de maiúsculas e minúsculas", () => {
    expect(normalizeString("EmUxInHo")).toBe("Emuxinho");
    expect(normalizeString("inconstitucionalissimamente")).toBe("Inconstitucionalissimamente");
    expect(normalizeString("TYPESCRIPT")).toBe("Typescript");
  });

  test("Testa inversão de string", () => {
    expect(reverseString("dracula")).toBe("alucard");
    expect(reverseString("pokemon")).toBe("nomekop");
    expect(reverseString("xuxa")).toBe("axux");
  });

  test("Testa remoção de espaços no começo, meio e fim da frase", () => {
    expect(removeExtraSpaces("salada")).toBe("salada");
    expect(removeExtraSpaces("    a     b c     ")).toBe("a b c");
  });

  test("Testa a conversão de links para tag html", () => {
    expect(convertLink("Texto normal")).toBe("Texto normal");
    expect(convertLink("https://google.com")).toBe("<a href=\"https://google.com\">https://google.com</a>");
    expect(convertLink("http://subrumundo.vercel.com")).toBe("<a href=\"http://subrumundo.vercel.com\">http://subrumundo.vercel.com</a>");
  });

  test("Testa a concatenação de string", () => {
    expect(concatString([ "banana", "uva", "maçã"])).toBe("banana, uva e maçã");
    expect(concatString([ "1", "2", "3", "4", "5"])).toBe("1, 2, 3, 4 e 5");
    expect(concatString([ "A", "B" ])).toBe("A e B");
    expect(concatString([ "feijão" ])).toBe("feijão");
    expect(concatString([ "Pêra", "Uva", "Maçã", "Salada mista"])).toBe("Pêra, Uva, Maçã e Salada mista");
    expect(concatString([ "paca", "tatu"/*, "cotia não" */ ])).toBe("paca e tatu");
  });
});
