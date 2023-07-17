import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StopsResolver } from './stops/stops.resolver';
import { StopsModule } from './stops/stops.module';

@Module({
  imports: [StopsModule],
  controllers: [AppController],
  providers: [AppService, StopsResolver],
})
export class AppModule {}
