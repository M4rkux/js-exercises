/**
 * Normaliza palavra, deixando a primeira letra maiúscula e as outras minúsculas
 * Ex.: "EmUxInHo" => "Emuxinho"
 * @param word 
 */
export function normalizeString(word: string): string {
  return "";
}

/**
 * Inverte a string
 * Ex.: "dracula" => "alucard"
 * @param text 
 * @returns string
 */
export function reverseString(text: string): string {
  return "";
}

/**
 * Remove os espaços do começo e fim da string e também remove qualquer espaço duplicado no meio
 * Ex.: " a  b c " => "a b c"
 * @param text 
 * @returns string
 */
export function removeExtraSpaces(text: string): string {
  return "";
}


/**
 * Verifica o texto inserido
 *   se for um link, então encapsula dentro da tag <a href=""></a> do html, com o ref sento o link e o conteúdo também
 *   Se não for um link, então retorna o mesmo texto
 * 
 * Ex.: 
 *    "https://google.com" => "<a href="https://google.com">https://google.com</a>"
 *    "Texto normal" => "Texto normal"
 * 
 * Obs.: Verificar tanto links http quanto https
 * Obs.2: Utilizar aspas duplas na propriedade href
 * @param text 
 * @returns string
 */
export function convertLink(text: string): string {
  return "";
}

/**
 * Concatene os valores de um array em uma única string, separando eles por vírgula, porém entre o penúltimo e o último valor,
 * troque a vírgula por "e", como na regra de português.
 * Ex.: 
 *    [ "banana", "uva", "maçã"] => "banana, uva e maçã"
 *    [ "1", "2", "3", "4", "5"] => "1, 2, 3, 4 e 5"
 *    [ "A", "B" ] => "A e B"
 *    [ "feijão" ] => "feijão"
 * @param arr 
 * @returns 
 */
export function concatString(arr: string[]): string {
  return "";
}