import { DataSource, DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'sqlite',
  database: 'database.db',
  migrations: [__dirname + '/database/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations_typeorm',
  migrationsRun: true,
  entities: [__dirname + '/database/entities/**/*.entity{.ts,.js}'],
  synchronize: false,
};

const dataSource = new DataSource(config);

export default dataSource;
