# Atividade: Buscando dados na Numbers API
## Introdução
Antes de realizar essa atividade, faça um clone desse repositorio para ter a estrutra básica do projeto.

Já vimos como fazer requisições com o fetch() e nessa atividade você vai praticar esse método consumindo dados da API [Numbers](http://numbersapi.com/).

Essa API nos retorna fatos interessantes sobre os números passados como parâmetro ou mesmo sobre um número aleatório. Pode ser um ano, uma data ou apenas um fato sobre o número em si!

## Prática
Utilize seus conhecimentos com DOM para construir uma interface que receba uma data e um número qualquer do usuário para fazer uma busca com esses dados na API.

Você terá dois campos, um para a data e outro para um número qualquer. Será necessário ter um botão para capturar esses dados. No clique, deverá acontecer 3 requisições nos endpoints informados abaixo. Também mostre as respostas dessas requisições no documento.

**URI**: http://numbersapi.com

## Endpoints
- /n/trivia: Sendo n é um número qualquer.
- /a/year: Sendo a é um ano qualquer.
- /m/d/date Sendo m um mês qualquer e d um dia válido do mês escolhido.
Com essas informações, utilize o fetch() para consumir esses endpoints.

### Dica!
Utilize sua data de nascimento e idade para ver fatos relacionados a elas.
