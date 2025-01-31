import { Document } from 'mongoose';
import { StatusValue } from '../../../comoon/domain/status.value';

export interface BookDocument extends Document {
  title: string;
  chapters: number;
  pages: number;
  publicationYear: number;
  authors: string[];
  status: StatusValue;
}
