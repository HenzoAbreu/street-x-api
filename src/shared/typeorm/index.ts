import { createConnection } from 'typeorm';

createConnection({
    "type": "mysql",
    "host": process.env.DB_HOST ?? "",
    "port": 3306,
    "username": process.env.DB_USER ?? "",
    "password": process.env.DB_PASS ?? "",
    "database": process.env.DB_NAME ?? "",
    "entities": [process.env.ORM_ENTITIES ?? ""],
    "migrations": [
      process.env.ORM_MIGRATIONS ?? ""
    ],
    "cli": {
      "migrationsDir": process.env.ORM_CLI ?? ""
    }
  });
