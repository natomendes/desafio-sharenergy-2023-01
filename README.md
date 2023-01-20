# Desafio para o processo seletivo SHARENERGY 2023/01

O Projeto consiste uma aplicação web (frontend e backend) capaz de realizar a comunicação com APIs distintas, além de um CRUD.

[Video de apresentação do projeto](https://vimeo.com/791047865)

## Aplicação

- A página inicial da aplicação consiste em uma `Login Page`;
- O usuário é capaz de se autenticar utilizando o username `desafiosharenergy` e password `sh@r3n3rgy`, após o primeiro acesso o usuário consegue voltar a página sem a necessidade de digitar username e password;
- Após o Login, a página principal contem uma listagem de usuários gerada a partir da api [Random User Generator](https://randomuser.me/), mostrando a foto do usuário, nome completo, email, username e idade. Além disso, os requests são páginados, listando dez usuários por página. Há tambpem uma search para buscar usuários por nome, email ou username;
- Em uma segunda página, o usuário selecionar um status code http qualquer, e, após a seleção, é retornada uma imagem da api [HTTP Cat](https://http.cat/) relacionada ao status escolhido, caso não exista tal imagem, é retornada a imagem do status code 404 Not Found (Não encontrado);
- Em uma terceira página, há um botão de refresh que, ao ser clicado,retorna uma imagem aleatória da api [Random Dog](https://random.dog/);
- Em uma quarta página, existe uma lista de clientes, através da qual o usuário é capaz de cadastrar novos clientes, visualizar informações de um cliente específico, atualizar um cliente e deletar clientes. O possui nome, email, telefone, endereço e cpf.

### Ferramentas e Stack utilizadas no projeto

- ReactJS com TailwindCss para o frontend
- NodeJS com Express para o backend
- MongoDB
- TypeScript

### Instruções para rodar o projeto

- A partir da raiz do projeto rode o comando:
```sh
  npm run up
```
- A aplicação estará disponível no endereço

  http://localhost:8080

- Credenciais de acesso para teste:
  - Username: `desafiosharenergy`
  - Senha: `sh@r3n3rgy`

<br>
<h2>Desenvolvido por Renato Mendes</h2>
<a href="https://www.linkedin.com/in/renatolmendes/">
  <img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?&style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn Button">
</a>
