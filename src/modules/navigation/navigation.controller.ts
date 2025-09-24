import { Body, Controller, Get, Post } from '@nestjs/common';
import { NavigationService } from './navigation.service';
import { CreateNavigationDto } from './dto/create-navigation.dto';
import { Navigation } from './schemas/navigation.schema';

@Controller('navigation')
export class NavigationController {
  constructor(private readonly navigationService: NavigationService) {}

  @Post()
  async create(@Body() dto: CreateNavigationDto): Promise<Navigation> {
    return this.navigationService.create(dto);
  }

  @Get()
  async findAll(): Promise<Navigation[]> {
    return this.navigationService.findAll();
  }
}
