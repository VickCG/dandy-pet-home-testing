# Dandypet home testing

This is a small project with the DandyPet 's requirement

1. Client: Angular 8
2. Server: AdonisJS 4 framework
3. Database: PostgreSQL

## Setup

### Server setup

Go to server folder, execute this command:
 ```bash
 npm install
 ```

Edit PostgreSQL configuration in .env file:

```bash
DB_HOST=YOUR_DB_HOST
DB_PORT=5432
DB_USER=YOUR_DB_USER
DB_PASSWORD=YOUR_DB_PASSWORD
DB_DATABASE=YOUR_DB_DATABASE
```

Run the following command to run startup migrations.

```js
adonis migration:run
```

Finally, run npm start. If the server runs successfully, you can see info: `serving app on http://localhost:3333`

### Client setup

Go to client folder, execute this command:
 ```bash
 npm install
 ```
After successfully installing, you just need to type this statement
 ```bash
 ng serve
 ```
