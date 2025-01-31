import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsArray } from 'class-validator';

export class CreateAuthorDto {
  @ApiProperty({ description: 'Author name', example: 'Nombre demo' })
  @IsString()
  name: string;

  @IsOptional()
  @IsArray()
  books?: string[];
}
