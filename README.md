# node-mysql-restapi-express

This API uses Node.js with Express Web Server and MySQL Database.

### Before running the app you should fill these fields with your own credentials:
#### make your ```.env``` directory
    PORT = 7000 <-- port that Server is listen
    DATABASE = mysql <-- name of database of MySQL
    HOST = mysql <-- name of Hostname
    DATABASE_USER = mysql <-- Add your username
    PASSWORD = mysql <-- Add your password

## API Endpoints

Run the following on Postman

Demo DATA API Endpoints:

   - POST ```localhost:7000/user/```
   - GET(List all) ```localhost:7000/data/```
   - GET(Specific) ```localhost:7000/user/:id```
   - PUT ```localhost:7000/user/:id```
   - DELETE ```localhost:7000/user/:id```
#
