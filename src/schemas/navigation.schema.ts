import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Navigation extends Document {
  @Prop({ required: true, unique: true })
  title: string;

  @Prop({ required: true, unique: true })
  slug: string;

  @Prop({ default: Date.now })
  lastScrapedAt: Date;
}

export const NavigationSchema = SchemaFactory.createForClass(Navigation);
