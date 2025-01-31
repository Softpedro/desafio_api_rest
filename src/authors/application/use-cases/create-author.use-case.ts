import { Injectable, Inject } from '@nestjs/common';

import { CreateAuthorDto } from '../dto/create-author.dto';

import { Author } from '../../domain/entities/author.entity';
import { AuthorRepository } from '../../domain/repositories/author.repository';

@Injectable()
export class CreateAuthorUseCase {
  constructor(
    @Inject('AuthorRepository')
    private readonly authorRepository: AuthorRepository,
  ) {}

  async execute(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const author = new Author(
      '',
      createAuthorDto.name,
      createAuthorDto?.books ?? [],
    );
    return this.authorRepository.create(author);
  }
}
