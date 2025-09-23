import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Navigation, NavigationSchema } from '../../schemas/navigation.schema';
import { NavigationService } from './navigation.service.js';
import { NavigationController } from './navigation.controller.js';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Navigation.name, schema: NavigationSchema },
    ]),
  ],
  controllers: [NavigationController],
  providers: [NavigationService],
})
export class NavigationModule {}
