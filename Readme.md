# Projeto de Integração com a API Community IoT Device (CIoTD)

Este projeto visa integrar um sistema de cadastro e gerenciamento de dispositivos IoT à API Community IoT Device (CIoTD). Através desta API, é possível realizar operações como registro de novos dispositivos, autenticação de usuários e manipulação de dispositivos cadastrados.

## Documentação da API

A API Community IoT Device (CIoTD) segue a especificação OpenAPI 3.0.0 e fornece os seguintes endpoints:

- **GET /device**: Retorna uma lista de identificadores dos dispositivos cadastrados na plataforma.
- **POST /device**: Cadastra um novo dispositivo na plataforma.
- **GET /device/{id}**: Retorna os detalhes de um dispositivo específico.
- **PUT /device/{id}**: Atualiza os detalhes de um dispositivo existente.
- **DELETE /device/{id}**: Remove um dispositivo da plataforma.
- **POST /api/auth/register**: Registra um novo usuário na plataforma.
- **POST /api/auth/login**: Autentica um usuário e fornece um token de acesso.

Para mais detalhes sobre os parâmetros esperados em cada endpoint e as respostas correspondentes, consulte a [documentação completa da API](link_para_documentacao).

## Como Usar

1. **Configuração do Ambiente**: Certifique-se de ter as dependências necessárias instaladas. Você pode instalar todas as dependências executando `npm install`.

2. **Configuração da API**: Antes de iniciar o projeto, é necessário configurar as variáveis de ambiente com as credenciais de acesso à API, como a URL base e as chaves de autenticação, se aplicável. Isso pode ser feito criando um arquivo `.env` na raiz do projeto e definindo as variáveis de ambiente lá.

3. **Execução do Projeto**:
   - **Desenvolvimento**: Execute `npm start` para iniciar o servidor de desenvolvimento. Isso abrirá o aplicativo no seu navegador padrão.
   - **Produção**: Para criar uma versão otimizada para produção, execute `npm run build`. Isso criará uma pasta `build` com os arquivos otimizados prontos para implantação.

4. **Interagindo com a API**: Utilize as diferentes funcionalidades disponíveis no aplicativo para interagir com a API, como registrar novos dispositivos, visualizar detalhes de dispositivos existentes e autenticar usuários.

## Licença

Este projeto está licenciado sob a [MIT License](link_para_licenca).
