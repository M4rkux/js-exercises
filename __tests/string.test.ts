import {describe, expect, test} from '@jest/globals';
import { convertLink, normalizeString, removeExtraSpaces, reverseString } from '../exer_002-string';

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
});
