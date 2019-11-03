# challenge-lagoasoft

The exercise is to build a web page using React that renders images (it can be from a social network of your liking, like instagram) with a voting system. Everything can run in the browser, no persistence of data is required.

Specs:

User opens page and views a grid of images from a social network of your liking

It can be a static JSON in your application with the urls of the images defined, no need to connect to an instagram account or any other social network

It has to support voting of each image, you can use thumbs up / thumbs down.

the idea is that you use hooks to store state inside a React State

Example: https://daveceddia.com/usestate-hook-examples/

Conditions:

Use React

Important: Try and create really small components, so you can have a big hierarchy. You can have more generic components like Label, Button, and more specialized components like Thumbs Up and Thumbs Down that use Button, for example.

https://reactjs.org/docs/hooks-reference.html

Send a github or bitbucket link to your repository

## Layout da aplicação

<img src="src/assets/instalagoasoft.png" width="400">

## Para rodar a aplicação

Após clonar o repositório do github, executar um dos comandos abaixo para carregar os modulos do node.

    yarn install
    ou
    npm install

Dentro da pasta frontend, execute o comando abaixo para iniciar a aplicação.

    yarn start
    ou
    npm react-script start