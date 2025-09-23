import { Controller, Get, Post, Body } from '@nestjs/common';
import { NavigationService } from './navigation.service';

@Controller('navigation')
export class NavigationController {
  constructor(private readonly navigationService: NavigationService) {}

  @Post()
  create(@Body() dto: { title: string; slug: string }) {
    return this.navigationService.create(dto);
  }

  @Get()
  findAll() {
    return this.navigationService.findAll();
  }
}
