import { Module } from '@nestjs/common';
import { ExampleModule } from './modules/example/example.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';
import { config as TypeormConfig } from './config/typeorm.config';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.db',
      migrations: [__dirname + '/database/migrations/*{.ts,.js}'],
      migrationsTableName: 'migrations_typeorm',
      migrationsRun: true,
      entities: [__dirname + '/database/entities/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ExampleModule,
    UsersModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
