# DSMovie

- Repositório criado para o desenvolvimento de um catálogo de filmes, que oportuniza ao usuário avaliá-los. 
- Essa aprendizagem faz parte da Semana Spring React, conduzida pelo Prof. Nélio Alves, de 10 a 16 de janeiro de 2022.

<div>
<span><img src="https://github.com/pcamposaugusto/dsmovie/blob/main/frontend/page-layout.png" width="700rem" /></span>
</div>

### Objetivos:

- Criar os projetos backend e frontend, com os frameworks Spring e React.
- Desenvolvimemnto do frontend com Bootstrap.
- Implementação do backend, seguindo o modelo de domínio e o padrão de arquitetura em camadas, com acesso ao banco de dados. 
- Criação dos endpoints da API REST.
- Criação e validação do Postgres local com o pgAdimin e posterior provisionamento do banco no Heroku
- Implantação do app na nuvem (Heroku).
- Implantação do app no Netlify.
- Integração do backend e frontend, utilizando três pilares do React: Componentes, Props e Estado; além de React Hooks.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

#### Ferramentas que você deverá instalar no seu computador:

- JDK 17
- STS
- Postman
- Postgresql e pgAdmin
- Heroku CLI
- NodeJS 16.x (https://nodejs.org/en/download/)
- VS Code
- Git

#### Frontend

- Conferir Node (16 LTS) e Yarn

```
node -v
yarn -v
```

- Caso precise instalar o Yarn, faça o comando:

```
npm install --global yarn
```

- Uma vez que você tenha o node e o yarn em sua máquina e tenha clonado o repositório, instale as dependências que se encontram no arquivo package.json, utilizando o seguinte comando:

```
yarn install
```

- Após a instalação, insira o seguinte comando para iniciar a aplicação:

```
yarn start
```

#### Backend

- Instale o Java 17 e Maven 3.6.2 ou versões superiores.
    
- Para executar o projeto no terminal, digite o seguinte comando em um terrminal que esteja na pasta onde foi feito o git clone desse repositorio: 

```
mvn spring-boot:run
```
   
- Após executar o comando acima, basta abrir o seguinte endereço e visualizar a execução do projeto:

```
http://localhost:8080/
```

## 🛠️ Tecnologias utilizadas

As seguintes tecnologias foram usadas na construção do projeto:

* HTML e CSS
* Typescript
* Bootstrap
* React
* NodeJS 16.x
* Java (JDK 17)
* Spring
* Postman
* Git
* Postgresql 14 e pgAdmin
* Heroku CLI
* VSCode
* SpringToolSuite4


Para mais informações sobre a Semana Spring React, consultar o repositório: https://github.com/devsuperior/sds-dsmovie

