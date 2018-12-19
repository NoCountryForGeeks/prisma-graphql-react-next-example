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

1. ```yarn start:prisma```
2. ```yarn prisma:deploy```
3. ```yarn start```

## Launch Prisma Playground

**Note: The prisma endpoint is secured with secret key to only allow authorized request**

1. ```yarn prisma:token```
3. Go to browser and open ```http://localhost:4466```
2. Copy the generated token and add to playground headers
```javascript
{
  "Ahutorized": "Bearer  _YOUR_GENERATED_TOKEN_"
}
```

## Launch Server Playground

1. ```yarn start```
3. Go to browser and open ```http://localhost:4000```

**Note: If the PRISMA_SECRET is not set in .env file, the prisma endpoint is not authenticated and the deploy command will throw a warning (recomended in development)**