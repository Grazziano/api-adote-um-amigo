# API Adote um Amigo 🐾

API para conectar animais de estimação disponíveis para adoção com potenciais adotantes. Desenvolvida com NestJS, esta aplicação facilita o processo de adoção responsável de animais.

## 📋 Funcionalidades

- **Gestão de Animais**: Cadastro, listagem e detalhamento de animais disponíveis para adoção
- **Sistema de Usuários**: Registro e autenticação de adotantes e abrigos
- **Processo de Adoção**: Solicitações e acompanhamento de processos de adoção
<!-- - **Sistema de Favoritos**: Usuários podem favoritar animais de interesse
- **Busca Avançada**: Filtros por espécie, raça, idade, localização e características
- **Upload de Imagens**: Armazenamento de fotos dos animais para adoção -->

## 🚀 Stack Tecnológica

- **NestJS** - Framework Node.js para construção de aplicações server-side eficientes e escaláveis
- **TypeORM** - ORM para TypeScript e JavaScript que suporta PostgreSQL
- **PostgreSQL** - Banco de dados relacional robusto e open-source
- **Docker** - Plataforma para desenvolvimento, envio e execução de aplicações em containers
- **JWT** - Autenticação por tokens
- **bcrypt** - Criptografia de senhas
- **Class-validator** - Validação de dados para DTOs
- **ConfigModule** - Gerenciamento de configurações da aplicação

## 📦 Instalação e Execução

### Pré-requisitos
- Docker e Docker Compose instalados
- Node.js 18+ (apenas para desenvolvimento local)

### Com Docker (Recomendado)

1. Clone o repositório:
```bash
git clone https://github.com/Grazziano/api-adote-um-amigo.git
cd api-adote-um-amigo
```

2. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```
Edite o arquivo `.env` com suas configurações.

3. Execute com Docker Compose:
```bash
docker-compose up -d
```

A API estará disponível em `http://localhost:3000`

### Desenvolvimento Local (Sem Docker)

1. Clone o repositório e instale as dependências:
```bash
git clone https://github.com/Grazziano/api-adote-um-amigo.git
cd api-adote-um-amigo
npm install
```

2. Configure o PostgreSQL localmente e ajuste as variáveis de ambiente no `.env`

<!-- 3. Execute as migrations:
```bash
npm run typeorm migration:run
``` -->

4. Inicie o servidor:
```bash
# desenvolvimento
npm run start:dev

# produção
npm run build
npm run start:prod
```

## 🐳 Docker Configuration

O projeto inclui os seguintes containers:
- `api` - Aplicação NestJS
- `postgres` - Banco de dados PostgreSQL
<!-- - `pgadmin` - Interface web para gerenciamento do PostgreSQL (opcional) -->

Este projeto utiliza **Docker** e **Docker Compose** para facilitar a execução da API NestJS e do banco de dados PostgreSQL.

### Pré-requisitos

* [Docker](https://www.docker.com/get-started) instalado.
* [Docker Compose](https://docs.docker.com/compose/) instalado.

### Passos para rodar a aplicação

1. **Crie o arquivo `.env`** na raiz do projeto com as variáveis de ambiente necessárias (exemplo):

   ```env
   DATABASE_HOST=db
   DATABASE_PORT=5432
   DATABASE_USER=postgres
   DATABASE_PASSWORD=postgres
   DATABASE_NAME=adote_um_amigo
   ```

2. Suba os containers:

   ```bash
   docker-compose up --build
   ```

   * O parâmetro `--build` garante que o container será reconstruído.
   * Para rodar em background (modo daemon):

     ```bash
     docker-compose up -d
     ```

3. Acesse a aplicação:

   * API NestJS: [http://localhost:3000](http://localhost:3000)
   * Banco de dados PostgreSQL: `localhost:5432`

4. Parar os containers:

   ```bash
   docker-compose down
   ```

5. Persistência de dados:

   * O banco de dados usa um volume Docker chamado `pgdata` para persistir os dados mesmo após reiniciar os containers.

## 🗃️ Estrutura do Projeto

```
src
│
├── app.module.ts
│
├── users
│   ├── dto
│   │   ├── create-user.dto.ts
│   │   └── update-user.dto.ts
│   ├── entities
│   │   └── user.entity.ts
│   ├── users.service.ts
│   ├── users.controller.ts
│   └── users.module.ts
│
├── animals
│   ├── dto
│   │   ├── create-animal.dto.ts
│   │   └── update-animal.dto.ts
│   ├── entities
│   │   └── animal.entity.ts
│   ├── animals.service.ts
│   ├── animals.controller.ts
│   └── animals.module.ts
│
├── animal-photos
│   ├── dto
│   │   ├── create-animal-photos.dto.ts
│   │   └── update-animal-photos.dto.ts
│   ├── entities
│   │   └── animal-photos.entity.ts
│   ├── animal-photos.service.ts
│   ├── animal-photos.controller.ts
│   └── animal-photos.module.ts
│
├── adoption-requests
│   ├── dto
│   │   ├── create-adoption-request.dto.ts
│   │   └── update-adoption-request.dto.ts
│   ├── entities
│   │   └── adoption-request.entity.ts
│   ├── adoption-requests.service.ts
│   ├── adoption-requests.controller.ts
│   └── adoption-requests.module.ts
│
└── adoptions
    ├── dto
    │   ├── create-adoptions.dto.ts
    │   └── update-adoptions.dto.ts
    │   ├── entities
    │   └── adoption.entity.ts
    ├── adoptions.service.ts
    ├── adoptions.controller.ts
    └── adoptions.module.ts
```

## 📡 Endpoints da API

### Autenticação
- `POST /auth/register` - Registrar novo usuário
- `POST /auth/login` - Login de usuário
- `GET /auth/profile` - Obter perfil do usuário logado

### Animais
- `GET /animals` - Listar animais (com filtros)
- `POST /animals` - Criar novo animal (requer autenticação)
- `GET /animals/:id` - Obter detalhes de um animal
- `PUT /animals/:id` - Atualizar animal (dono ou admin)
- `DELETE /animals/:id` - Remover animal (dono ou admin)
- `POST /animals/:id/upload` - Upload de imagens do animal

### Usuários
- `GET /users/:id` - Obter perfil de usuário
- `PUT /users/:id` - Atualizar perfil
- `GET /users/:id/favorites` - Listar animais favoritos

### Adoções
- `POST /adoptions` - Solicitar adoção
- `GET /adoptions` - Listar solicitações (usuário ou abrigo)
- `PUT /adoptions/:id/status` - Atualizar status da adoção

### Favoritos
- `POST /favorites/:animalId` - Adicionar animal aos favoritos
- `DELETE /favorites/:animalId` - Remover animal dos favoritos

## 🗃️ Modelos do Banco de Dados

### User Entity
```typescript
@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: UserType })
  type: UserType;

  @Column({ nullable: true })
  phone: string;

  @Column({ type: 'jsonb', nullable: true })
  address: Address;

  @OneToMany(() => Animal, animal => animal.shelter)
  animals: Animal[];

  @OneToMany(() => Adoption, adoption => adoption.adopter)
  adoptions: Adoption[];
}
```

### Animal Entity
```typescript
@Entity('animals')
export class Animal {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'enum', enum: AnimalSpecies })
  species: AnimalSpecies;

  @Column()
  breed: string;

  @Column()
  age: number;

  // ... outros campos e relações
}
```

<!-- ## 🔧 Exemplos de Uso

### Registrar um usuário:
```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "email": "joao@email.com",
    "password": "senha123",
    "type": "adopter",
    "phone": "(11) 99999-9999"
  }'
```

### Listar animais com filtros:
```bash
curl -X GET "http://localhost:3000/animals?species=dog&maxAge=2&vaccinated=true"
```

### Upload de imagem para animal:
```bash
curl -X POST http://localhost:3000/animals/:id/upload \
  -H "Authorization: Bearer <token_jwt>" \
  -F "file=@/path/to/image.jpg"
```

## 🧪 Testes

Execute os testes com:
```bash
# Testes unitários
npm run test

# Testes e2e
npm run test:e2e

# Testes com cobertura
npm run test:cov
``` -->

## 📊 Status Codes

A API retorna os seguintes status codes:

| Código | Descrição |
|--------|-----------|
| 200 | OK - Requisição bem sucedida |
| 201 | Created - Recurso criado com sucesso |
| 400 | Bad Request - Dados inválidos |
| 401 | Unauthorized - Não autenticado |
| 403 | Forbidden - Autenticado mas sem permissão |
| 404 | Not Found - Recurso não encontrado |
| 500 | Internal Server Error - Erro no servidor |

## 🤝 Contribuição

1. Faça o fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🆘 Suporte

Em caso de dúvidas ou problemas:

- Consulte a documentação da API em `/api` quando o servidor estiver rodando
- Verifique os logs do container: `docker-compose logs api`
- Crie uma issue no [GitHub Issues](https://github.com/seu-usuario/adote-um-amigo-api/issues)

---

**Adote um Amigo** 🐶😺 - Conectando animais que precisam de um lar com pessoas que têm amor para dar!
