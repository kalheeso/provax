# Vacinação

## VIDEO APRESENTÇÃO
https://www.youtube.com/watch?v=GatysAFX-vI

## Explicação do framework de persistância
[spring.pdf](spring.pdf)

## Informações da Hospedagem - ACESSE POR AQUI
Frontend: 143.198.75.125:4200  
Backend: 64.23.144.76:8080  
Banco de dados credenciais:  
* URL_DATABASE: jdbc:postgresql://64.23.131.165:5432/vacinacao  
* PASSWORD_DATABASE: mysecretpassword  
* USERNAME_DATABASE: master  

**Permanecerá hospedado até o final da disciplina**


## Pré requisitos
- Banco Postgres
- Configurar variáveis de ambiente
- JDK 17
- Maven
- Node 20.9.0
- Configurar a API_URL no fronted para a URL desejada
**OU pode usar Docker e somente Configurar as variáveis de ambiente do backend**

Essas são as variáveis de ambiente do banco, estão n arquivo [resources/applications.properties](backend/src/main/resources/application.properties)
```
${URL_DATABASE}
${USERNAME_DATABASE}
${PASSWORD_DATABASE}
```
