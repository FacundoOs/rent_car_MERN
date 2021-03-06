module.exports = [
  {
    name: 'dev',
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: ['dist/**/entities/*{.ts,.js}'],
    synchronize: true,
    migrations: ['dist/migrations/*{.ts,.js}'],
    cli: {
      migrationsDir: 'src/migrations',
    },
  },
  {
    name: 'prod',
    type: 'mysql',
    host: 'mysqldb',
    port: 3306,
    username: 'root',
    password: 'pass123',
    database: 'yourcar',
    entities: ['dist/**/entities/*{.ts,.js}'],
    synchronize: true,
    migrations: ['dist/migrations/*{.ts,.js}'],
    cli: {
      migrationsDir: 'src/migrations',
    },
  },
];
