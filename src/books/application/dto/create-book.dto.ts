import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsArray } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({ description: 'Book title', example: 'Title demo' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'Number of chapters', example: 20 })
  @IsNumber()
  chapters: number;

  @ApiProperty({ description: 'Number of pages', example: 464 })
  @IsNumber()
  pages: number;

  @ApiProperty({ description: 'Publication year', example: 2008 })
  @IsNumber()
  publicationYear: number;

  @ApiProperty({
    description: 'List of author IDs',
    example: ['67818290d866ad47ea7be402'],
  })
  @IsArray()
  authors: string[];
}
