import { Module } from '@nestjs/common';
import { XRPLController } from './xrpl.controller';
import { AppService } from './service/grant.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'XRPL',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: ['src/migrations/*.js'],
      synchronize: true,
    }),
  ],
  controllers: [XRPLController],
  providers: [AppService],
})
export class AppModule {}
