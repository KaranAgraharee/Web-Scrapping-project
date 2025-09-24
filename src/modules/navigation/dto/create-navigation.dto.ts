import { IsString, IsOptional } from 'class-validator';

export class CreateNavigationDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  url?: string;
}
