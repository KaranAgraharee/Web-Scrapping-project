import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Navigation } from '../../schemas/navigation.schema';

@Injectable()
export class NavigationService {
  constructor(
    @InjectModel(Navigation.name) private navModel: Model<Navigation>,
  ) {}

  async create(dto: { title: string; slug: string }) {
    return this.navModel.create(dto);
  }

  async findAll() {
    return this.navModel.find().exec();
  }
}
