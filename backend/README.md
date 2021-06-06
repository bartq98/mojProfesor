# Requirements
- Java 15
- PostgreSQL with 'mojprofesor' database. You can install PostgreSQL in your system, or you can use Docker.
```
docker run -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=mojprofesor -p 5432:5432 postgres
```

- Endpoint LOGOWANIE:
  podczas logowania ustawiane są cookies
  ```
  name = Authorization
  ```
  POST /login:
   - example request:
    ```     
    {
        "email": "example@example.com",
        "password": "1Example.1111"
    }
    ```
  Wylogowanie: usunąć ciasteczka JSESSION i Authorization