# mojProfesor

### Local development

| Service       | Hostname                    | IP         | Ports exposed | Purpose               |
|---------------|-----------------------------|------------|---------------|-----------------------|
| api           | mojprofesor_api_1           | 172.18.0.3 | 7000->80      | Spring-boot API       |
| postgres_db   | mojprofesor_postgres_db_1   | 172.18.0.2 | 6432->5432    | Database              |

#### Run dev environment

From root project run:

`docker-compose up`

#### Restart api service
docker-compose up --build --force-recreate --no-deps api

#### Backend docs
http://localhost:7000/swagger-ui/index.html