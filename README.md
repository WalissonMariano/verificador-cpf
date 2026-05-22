# Verificador de CPF

Aplicação web simples que valida um CPF (Cadastro de Pessoas Físicas) brasileiro usando o algoritmo oficial dos dígitos verificadores.

## Sobre o projeto

O verificador calcula os dois dígitos verificadores a partir dos nove primeiros números do CPF e compara o resultado com o número informado. A interface é mínima: um campo de entrada, um botão e a mensagem de resposta.

**Importante:** esta ferramenta valida apenas o formato matemático do CPF. Ela **não** consulta bases da Receita Federal nem confirma se o documento existe ou está ativo.

## Tecnologias

- HTML5
- CSS3
- JavaScript (vanilla, sem frameworks ou dependências)

## Estrutura do repositório

```
verificador-cpf/
├── index.html   # Interface da aplicação
├── script.js    # Lógica de validação do CPF
└── README.md
```

## Como usar

### Requisitos

- Navegador moderno (Chrome, Firefox, Edge, Safari, etc.)
- Não é necessário instalar Node.js, npm ou outras dependências

### Executar localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/WalissonMariano/verificador-cpf.git
   cd verificador-cpf
   ```

2. Abra o arquivo `index.html` no navegador (duplo clique ou arraste o arquivo para uma aba).

   Opcionalmente, use um servidor local para evitar restrições de alguns navegadores:

   ```bash
   # Com Python 3
   python -m http.server 8000
   ```

   Depois acesse: `http://localhost:8000`

3. Digite um CPF com **11 dígitos numéricos**, sem pontos ou traços (ex.: `12345678909`).

4. Clique em **Verificar**. A resposta aparecerá abaixo do botão:
   - `CPF VALIDO` — os dígitos verificadores conferem com o algoritmo
   - `CPF INVALIDO` — os dígitos não conferem

## Como funciona a validação

O algoritmo segue as regras dos dígitos verificadores do CPF:

1. Multiplica os 9 primeiros dígitos por pesos decrescentes (10 a 2) e soma o resultado.
2. Calcula o primeiro dígito verificador: `11 - (soma % 11)` (com regras especiais quando o resto é 0, 1 ou 2).
3. Repete o processo incluindo o primeiro dígito, com pesos de 11 a 2, para obter o segundo dígito.
4. Compara o CPF informado com o número gerado pelos cálculos.

A função principal está em `script.js`:

```javascript
function verificaCpf(cpfRecebido) {
  // ... cálculo dos dígitos verificadores
}
```
