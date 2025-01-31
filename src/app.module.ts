import { Module } from '@nestjs/common';

import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';
import { DatabaseModule } from './database/database.module';
import { MongooseConfig } from './settings/mongoose.config';

@Module({
  imports: [MongooseConfig, BooksModule, AuthorsModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
