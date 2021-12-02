# unifynd-backend-task
backend assignment of unifynd.com

- postman [collection](https://go.postman.co/workspace/My-Workspace~ec331ac9-8d7c-435d-8d65-57144835b2f6/collection/8935260-d4186b49-8a7b-46c9-9faf-3c3ecd5720aa)

### Setup
- You need Node.js v 16.13.0 and PostgreSQL installed on your system or you can use docker.

1. Create a .env file inside src folder and set values like below.
```
DB_URL=postgresql://root:password@localhost:5432/unifynd-api-test?schema=public
JWT_SECRET=ultraSecretPassword
```
2. Go inside your src folder and execute.
```bash
npm install
```
or
```bash
yarn install
```

3. Migrate Prisma
```bash
npx prisma migrate dev --name init 
```

4. Seed basic data
```
yarn seed
```

5. To start the server
```bash
yarn start
```
