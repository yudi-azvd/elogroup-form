# Formulário EloGroup
Esse formulário foi desenvolvido com [React](https://reactjs.org/) para a interface. Por mais que seja apenas uma página, escolhi implementar esse formulário usando React porque é o framework que estou estudando atualmente e quero colocar esses conhecimentos em prática.

Outras bibliotecas usadas:
* [Yup](https://github.com/jquense/yup#yup) para validação dos campos.
* [Axios](https://github.com/axios/axios#axios) para comunicação com o backend.



### Dê uma olhada
Você vai precisar do [Node.js](https://nodejs.org/en/) e [npm](https://www.npmjs.com/get-npm) instalados em seu computador.

```sh
git clone https://github.com/yudi-azvd/elogroup-form # ou baixe clicando no botão verde desse repositório
cd elogroup-form

npm install
npm run start
```



### Ou ainda
Se, por acaso, a instalação dos pacotes demorar muito, você pode checar o funcionamento do formulário em produção [aqui](https://elogroup-form.netlify.com/). O primeiro envio pode _demorar até 40 segundos_ porque o backend está hospedado em um servidor grátis da Heroku.



### Está mais ou menos assim
<div style="margin: 0 auto;">
  <img  src="./.github/elogroup-form-screenshot.png" 
  width="800px">
</div>



### Estrutura de arquivos
* `index.js` é o ponto de entrada da aplicação.
* `index.css` contém os estilos padrões da aplicação.
* `App.js` roteia as páginas da aplicação. 
* `assets/` contém arquivos como imagens, GIFs, ícones personalizados e etc. Nesse caso contém apenas a logo da EloGroup (espero que esteja tudo bem utilizá-la para esta prova técnica).
* `components/` contém os componentes React utilizados nesse projeto. Separei em componentes as partes do formulário que mais se repetiam ou exigiam um comportamento específico que não altera o funcionamento final do formulário.
* `pages/` contém as páginas da aplicação. Nesse caso é apenas a página do formulário. De fato, essa separação não é necessária para essa prova, mas quis manter uma estrutura mais parecida com a de um projeto real, que teria várias páginas.
* `services/` contém a configuração do Axios, onde é definida a URL para comunicação com o backend.


```

└── src
    ├── App.js
    ├── assets
    │   └── logo.svg
    ├── components
    │   ├── Checkbox
    │   │   ├── index.js
    │   │   └── styles.css
    │   ├── PhoneInput
    │   │   └── index.js
    │   └── SubmitButton
    │       ├── index.js
    │       └── styles.css
    ├── index.css
    ├── index.js
    ├── pages
    │   └── FormPage
    │       ├── index.js
    │       └── styles.css
    └── services
        └── api.js
```



### Requisição POST
Para testar localmente a requisição que é enviada pelo formulário, você pode baixar e usar o modelo encontrado
nesse [repositório](https://github.com/yudi-azvd/elogroup-form-backend).



### A fazer
Dê uma olhada [aqui](https://github.com/yudi-azvd/elogroup-form/issues/1).
