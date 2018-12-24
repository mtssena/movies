# Desafio Técnico React Native

## Descrição

Tomei como base a maneira mais simples para executar o que foi pedido. Utilizando o `create-react-app` iniciei o aplicativo, logo depois configurei o eslint com o padrão Airbnb. Utilizei alguns padrões de configuração de temas e o `styled-components` para estilização (que foi pouca, pois fiz de maneira bem simplificada). Não implementei tratamentos de erros, carregamentos, paginação (deixei configurado apenas) e não criei componentes, pois o sistema é muito simples e não quis ficar fazendo muitas coisas desnecessárias.

## Solução

Utilizei create-react-app para iniciar o projeto, configurei o eslint da maneira que mais gosto e configurei os reducers utilizando o padrão Redux-Ducks (https://github.com/erikras/ducks-modular-redux) juntamente com a lib `reduxsauce`. Utilizei `react-navigation` para controlar as rotas e `redux-persist` para persistência dos dados localmente.

Como seriam necessários várias requests assincronos utilizei também `redux-sagas` para controlar os side-effects, possibilitando um maior controle das requisições.

## Rodando o projeto

```
yarn install
react-native run-android
```
