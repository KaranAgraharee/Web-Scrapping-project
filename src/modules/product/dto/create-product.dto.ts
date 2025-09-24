import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  IsMongoId,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  author?: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsNotEmpty()
  @IsString()
  sourceId: string;

  @IsNotEmpty()
  @IsString()
  sourceUrl: string;

  @IsOptional()
  @IsMongoId()
  categoryId?: string;
}
