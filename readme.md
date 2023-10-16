# Lista de exercícios de JavaScript

Todos os arquivos estão em typescript, mas a funcionalidade a ser testada é puramente javascript.

## Instalação

Você precisa ter o [node](https://nodejs.org/) e [npm](https://www.npmjs.com/) instalados e então você precisará instalar as dependências do projeto através do comando.

```bash
npm install
```

## Exercícios

Todos os exercícios estão dentro da pasta `src/`, nos arquivos `exer_{numero}-{secao}.ts`.

- `src/exer_001-math.ts`
- `src/exer_002-string.ts`
- `src/exer_003-array.ts`
- `src/exer_004-security.ts`

Os exercícios já contam com as assinaturas das funções e as importações necessárias, basta preencher as funções.

## Testes

Para testar todos os exercícios basta usar `npm run test` e caso queira testar alguma seção específica basta colocar o nome da seção depois do teste, por exemplo:

```bash
npm run test math
npm run test string
npm run test array
npm run test security
```

## Debug
Existe um arquivo dentro `.vscode/launch.json` que está com a configuração para os testes unitários.
Normalmente essa pasta `.vscode` fica no `.gitignore` para não ir para o repisitório, já que as configurações de IDE geralmente são pessoais.
O atalho para rodar os teste unitários pelo debug é `F5`, também é possível selecionar a configuração desejada, através do atalho `ctrl + shift + D`, isso irá abrir o painel de `Executar e Depurar`.
Caso deseje adicionar `breakpoints` (ponto de interrupção), o que é o principal objetivo de executar pelo debugger, deve clicar no espaço esquerdo da linha desejada a bolinha vermelha indica que o código irá parar ali e um novo painel irá aparecer no topo da IDE, que permitirá você de ir executando linha por linha a partir do primeiro `breakpoint`.
