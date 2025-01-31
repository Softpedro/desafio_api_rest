import { Injectable, Inject } from '@nestjs/common';

import { BookRepository } from '../../domain/repositories/book.repository';
import { NotFoundException } from '../../../comoon/exceptions/404.exception';

@Injectable()
export class SoftDeleteBookUseCase {
  constructor(
    @Inject('BookRepository') private readonly bookRepository: BookRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const book = await this.bookRepository.findById(id);

    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }

    book.deactivate();
    await this.bookRepository.update(id, book);
  }
}
