import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Product extends Document {
  @Prop({ required: true })
  title: string;

  @Prop()
  author?: string;

  @Prop({ required: true })
  price: number;

  @Prop({ default: 'GBP' })
  currency: string;

  @Prop()
  imageUrl: string;

  @Prop({ required: true, unique: true })
  sourceId: string; // World of Books unique ID

  @Prop({ required: true })
  sourceUrl: string;

  @Prop({ type: Types.ObjectId, ref: 'Category' })
  categoryId: Types.ObjectId;

  @Prop({ default: Date.now })
  lastScrapedAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
