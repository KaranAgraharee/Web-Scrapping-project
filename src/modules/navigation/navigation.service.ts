import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Navigation } from './schemas/navigation.schema';
import { CreateNavigationDto } from './dto/create-navigation.dto';

@Injectable()
export class NavigationService {
  constructor(
    @InjectModel(Navigation.name) private navigationModel: Model<Navigation>,
  ) {}

  async create(dto: CreateNavigationDto): Promise<Navigation> {
    const nav = new this.navigationModel(dto);
    return nav.save();
  }

  async findAll(): Promise<Navigation[]> {
    return this.navigationModel.find().exec();
  }
}
