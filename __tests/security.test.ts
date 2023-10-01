import {describe, expect, test} from '@jest/globals';
import { checkPasswordCriteria, encryptPassword } from '../exer_004-security';

describe("Exercicio de segurança", () => {
  test("Testa os requisitos mínimos de senha", () => {
    expect(checkPasswordCriteria("")).toBe(false);
    expect(checkPasswordCriteria("abcd123")).toBe(false);
    expect(checkPasswordCriteria("abcd1234")).toBe(true);
    expect(checkPasswordCriteria("VeRy#Str0nG-P4$$w0rd")).toBe(true);
  });

  test("Testa a criptografia de senha com node:crypto", () => {
    expect(encryptPassword("password")).toBe("838f2b28f68e39cb75195856a19a95eb6ad981554ed46c4bbd9f1881dd082223a8ace243524ed1afa5b5fc0f3ae946dd7d48fddac229f59571379ab669083a9d");
    expect(encryptPassword("senha-boa")).toBe("9afec3544f91e18f1d783ff35eaaaaa616a7f2fcd9df1c5ab3f8111894d35d24064143a3b1468cb60763d7e6d7adf6d1e9685d5b98465bcf951315e331f3caca");
    expect(encryptPassword("senhadobanco123")).toBe("0a38c197dad2528f287bd944530f44b328a438c5a34f506431c8d9eb9c0d2ae6549fdb1dbb75da22443c4fb730cfb5778ca4327ae0f4abf47a9ac721266ca4e5");
  });
});