// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',     // Replace with your MySQL username
      password: 'Shaba$$09',     // Replace with your MySQL password
      database: 'rtcp',     // Replace with your MySQL database name
      entities: [User],
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
