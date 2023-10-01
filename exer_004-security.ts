import { createHmac } from 'node:crypto';

/**
 * Verifica se a senha possui os requisitos mínimos:
 * - Mínimo de 8 caracteres
 * - Pelo menos 1 letra
 * - Pelo menos 1 número
 * 
 * Ex.:
 *   "good#p4ssword" => true
 *   "bad-password" => false
 * @param password 
 * @returns boolean
 */
export function checkPasswordCriteria(password: string): boolean {
  const MIN_LENGTH = 8;

  function hasMinLength(): boolean {
    return password.length >= MIN_LENGTH;
  }

  function hasLetter(): boolean {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return password.toLowerCase().split("").some(char => alphabet.includes(char));
  }

  function hasNumber(): boolean {
    const alphabet = "0123456789".split("");
    return password.split("").some(char => alphabet.includes(char));
  }

  return hasMinLength() && hasLetter() && hasNumber();
}

/**
 * Função para criptografar senhas
 * Deve utilizar a função createHmac (já importado nesse aquivo)
 *  - O algorítmo deve ser "sha512"
 *  - A key deve ser a variável secret já criada
 *  - a resposta dessa função deve ser o digest com o encoding "hex"
 * @param password 
 * @returns string
 */
export function encryptPassword(password: string): string {
  const secret = "abcdef";
  let hash = createHmac('sha512', secret);
  hash.update(password);
  return hash.digest("hex");
}