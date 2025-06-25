# Fundamentos de React

## 06_styled-componentes

styled componentes é uma biblioteca (lib) muito usada como projetos react que perimte escrever estilos CSS dentro JavaScrpit usando a própria sintaxe do CSS. os estilos ficam acoplados ao componente em que foram declarados.

### instalação

- npm install styled components
- npm install --save-dev @types/styled-components
- Extensão vscode-styled-components

## 05_modulos-css

módulos CSS (CSS modulos) são uma maneira de escrever CSS em arquivos separados de extensão `.module.css` em cada classe e estilo fica isolando para um único
componente. há um **acoplamento** entre o modúlo e seu componente, permitindo um escopo bem definido sobre os estilos.

- criação de modulos para cada componente (exceto Rodape)
- importação do modúlo (chamado de styles ou estilos)
- aplicação das classes usando className={}
- reorganização da extensão CSS modules

## 04_estilos

- CSS global usando seletores tradicionais
- CSS inline aplicado cia style e escrevendo CSS in JS (objeto com propriedades CSS)

## 03_componentes-filhos-ou-internos

- criação de um componente filho (Menu) e importação/uso no pai (cabecalho)
- criação de um componente filho (Artigo) e importação/uso no pai (conteudo)
- instalação da extensão ES7+ React

## 02_criando-e-organizando-componentes

- Separação de trechos do App em novos componentes
- Exportação e importação dos componentes
- Uso de assets e importação de imagem
- Organização dos componentes em uma pasta dedicada

## 01_usando-a-sintaxe-JSX-no-App

- Construção de um componente único (App.tsx) usando elementos HTML e Fragmento React
- Referência sobre Componentes e JSX: https://react.dev/reference/react/Component
- Instalação da extensão React Developer Tools

## 00_projeto-zerado

- Remoção do CSS
- Remoção da pasta assets
- Simplificação do componente App.tsx e do main.tsx
