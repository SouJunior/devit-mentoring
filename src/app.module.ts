import { Module } from '@nestjs/common';
import { ExampleModule } from './modules/example/example.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database',
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    ExampleModule, 
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
