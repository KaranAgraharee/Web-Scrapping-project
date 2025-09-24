import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Navigation extends Document {
  @Prop({ required: true })
  title: string;

  @Prop()
  url: string;
}

export const NavigationSchema = SchemaFactory.createForClass(Navigation);
