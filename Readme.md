# Projeto de Integração com a API Community IoT Device (CIoTD)

Este projeto integra um sistema de cadastro e gerenciamento de dispositivos IoT à API Community IoT Device (CIoTD). A API oferece endpoints para operações como registro de dispositivos, autenticação de usuários e manipulação de dispositivos cadastrados.

## Documentação da API

A API Community IoT Device (CIoTD) segue a especificação OpenAPI 3.0.0 e fornece os seguintes endpoints:

- **GET /device**: Retorna uma lista de identificadores dos dispositivos cadastrados.
- **POST /device**: Cadastra um novo dispositivo.
- **GET /device/{id}**: Retorna os detalhes de um dispositivo específico.
- **PUT /device/{id}**: Atualiza os detalhes de um dispositivo existente.
- **DELETE /device/{id}**: Remove um dispositivo.
- **POST /api/auth/register**: Registra um novo usuário.
- **POST /api/auth/login**: Autentica um usuário e fornece um token de acesso.

Para mais detalhes sobre os parâmetros esperados em cada endpoint e as respostas correspondentes, consulte a [documentação completa da API](link_para_documentacao).

## Como Usar

1. **Configuração do Ambiente**: Certifique-se de ter as dependências necessárias instaladas. Você pode instalar todas as dependências executando `npm install`.

2. **Configuração da API**: Antes de iniciar o projeto, é necessário configurar as variáveis de ambiente com as credenciais de acesso à API, como a URL base e as chaves de autenticação, se aplicável. Isso pode ser feito criando um arquivo `.env` na raiz do projeto e definindo as variáveis de ambiente lá.

3. **Execução do Projeto**:
   - **Desenvolvimento**: Execute `npm start` para iniciar o servidor de desenvolvimento. Isso abrirá o aplicativo no seu navegador padrão.
   - **Produção**: Para criar uma versão otimizada para produção, execute `npm run build`. Isso criará uma pasta `build` com os arquivos otimizados prontos para implantação.

4. **Interagindo com a API**: Utilize as diferentes funcionalidades disponíveis no aplicativo para interagir com a API, como registrar novos dispositivos, visualizar detalhes de dispositivos existentes e autenticar usuários.

## Código Fonte

O código fonte deste projeto está disponível no [repositório do GitHub do candidato](link_para_repositorio).

## Explicação de Decisões de Design e Implementação

Este projeto foi desenvolvido com as seguintes decisões de design e implementação:

- **Componentização**: Utilizou-se componentes reutilizáveis para garantir uma estrutura modular e de fácil manutenção.
- **Gerenciamento de Estado**: Utilizou-se o hook `useState` do React para gerenciar o estado dos dispositivos e do usuário logado.
- **Requisições HTTP**: Utilizou-se a biblioteca Axios para realizar requisições HTTP de forma assíncrona.
- **Estilização**: Utilizou-se estilos CSS para garantir uma apresentação visual agradável e responsiva.

### Sugestões de Melhorias

Algumas melhorias que podem ser consideradas para o projeto incluem:

- **Autenticação**: Implementar um sistema de autenticação mais robusto, como JWT.
- **Testes Automatizados**: Adicionar testes automatizados para garantir a qualidade do código.
- **Documentação Adicional**: Expandir a documentação do código fonte para facilitar a manutenção e colaboração.

## Licença

Este projeto está licenciado sob a [MIT License](link_para_licenca).
