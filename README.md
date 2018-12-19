# prisma-graphql-react-next-example

The idea of this repository is to build a complete app using new technologies and research about them.

We want to build **social media shop** using Prisma, GraphQL, MongoDB, Passport, Next, Apollo.

## Road map

### Backend
- Configure the project to use .env file
- Add linter 
- Add authentication (Local, Facebook, Twitter, Instagram)
- Add boilerplate to use microservices
- Add reporting, timmers, stats, etc
- Add Healtcheck
- Add Test boilerplate
- Add deployment configuration

### Frontend
- Use Next (SSR)
- Use Apollo
- Use Hooks (Prohibited to use classes)
- Add animation to create a rich UI
- Add deployment configuration
- Add test boilerplate
- Use cypress to test
- Add reporting, load times, accesibility information, performance, etc.


## Run project

**Note: Docker is required to execute the project**

1. `yarn global add prisma@1.22.0-beta.8` or higher
2. `docker-compose up -d`
3. `prisma deploy`
4. `yarn start`